import L from '../autobotElement';
const livy = require('../../tools/livy');
const cheerio = require('cheerio')



export default class Table {


    //possible time values:
    /*

Less than a minute  ago
A minute  ago
2 minutes  ago
2 days  ago
17 days  ago
27 days  ago
About a month  ago
4 months  ago
11 months  ago
About a year ago


task:  sort it myself, and make sure reality aligns w/ expectation.


groups:

minute/s
day/s
hour/s
month/s
year/s

per group, first remove all of these and place start of new group. in this order:

"About ..."
"A ..."
"Less than ..."

then, sort the remaining numerically-starting elements of the timespan groups.
then combine into full timespan group

then combine all the timespan groups



    */



    static isIncreasing(values) {
        // console.log("need to consider these: ");
        // console.log(values);


        for (var i = 0; i < values.length - 1; i++) {
            if (values[i] > values[i + 1]) {
                return false;
            }
        }
        return true;


        // throw new Error("unsupported");
        // return false;
    }

    static isDecreasing(values) {
        for (var i = 0; i < values.length - 1; i++) {
            if (values[i] < values[i + 1]) {
                return false;
            }
        }
        return true;
    }

    constructor() {
        this.selectedColumnName = undefined;
        this.referenceColumnName = undefined;
    }
    // selectedColumnName

    // referenceColumnName


    // .setColumns('Project', 'Last Edited', 'Created')
    // .setSearchSelector('#search-input')
    // .setCheckboxSelector('.checkbox-input');


    // get column(columnName) {
    //     return new Column(columnName);
    // }


    select(columnName) {
        this.selectedColumnName = columnName;
        if (!browser.isExisting('//th/div[text()="' + this.selectedColumnName + '"]')) {
            throw new Error("Selected column not found: " + this.selectedColumnName);
        }
        return this;
    }


    where(columnName) {
        if (!this.selectedColumnName) {
            throw new Error("A column must be selected before a reference column can be identified.");
        }
        this.referenceColumnName = columnName;
        if (!browser.isExisting('//th/div[text()="' + this.referenceColumnName + '"]')) {
            throw new Error("Reference column not found: " + this.referenceColumnName);
        }
        return this;
    }


    contains(target) {

        //1.  determine colNumber of reference column

        const colNum = this.getColNum(this.referenceColumnName);

        //2.  determine rowNumber of target in the selected column

        const rowNum = this.getRowNumWhereColContainsTarget(colNum, target);

        //3.  return the value at rowNumber, colNumber

        const value = this.getValue(rowNum, colNum);


        //now reset selections

        this.selectedColumnName = undefined
        this.referenceColumnName = undefined

        return value;
    }

    equals(target) {

        //1.  determine colNumber of reference column

        const colNum = this.getColNum(this.referenceColumnName);

        //2.  determine rowNumber of target in the selected column

        const rowNum = this.getRowNumWhereColEqualsTarget(colNum, target);

        //3.  return the value at rowNumber, colNumber

        const value = this.getValue(rowNum, colNum);

        //now reset selections

        this.selectedColumnName = undefined
        this.referenceColumnName = undefined

        return value;
    }

    sortIncreasing(columnName) {
        const header = new L('//th/div[@class="flex flex-align-center" and text()="' + columnName + '"]');
        let chevronClass
        do {
            header.click();
            chevronClass = new L(header.selector + '/span').element.getAttribute("class");
        } while (chevronClass !== "chevron top");
        return this;
    }

    sortDecreasing(columnName) {
        const header = new L('//th/div[@class="flex flex-align-center" and text()="' + columnName + '"]');
        let chevronClass
        do {
            header.click();
            chevronClass = new L(header.selector + '/span').element.getAttribute("class");
        } while (chevronClass !== "chevron");
        return this;
    }

    getValuesByColName(colName) {
        //1.  determine column number (selectedColumn) (first is 1)

        //how?  get all headers.  loop through to see which one matches

        const colNum = this.getColNum(colName);

        // livy.log("colname: " + colName + ", colNum: " + colNum);

        return this.getValuesByColNum(colNum);
    }

    getValuesByColNum(colNum) {
        //2.  get elements at that td level

        const selector = '//tr[contains(@class, "table-row")]/td[' + colNum + ']'
        const tds = $$(selector)

        let colValues = [];

        for (var i = 0; i < tds.length; i++) {

            const html = tds[i].getHTML();

            const $ = cheerio.load(html);

            const firstSpanText = $('span').text();

            colValues.push(firstSpanText);
        }

        return colValues;

    }

    getValues() {
        if (!this.selectedColumnName) {
            throw new Error("No column has been selected yet.");
        }
        return this.getValuesByColName(this.selectedColumnName);
    }

    /**
     * First column is column 1.
     * @param {*} colName 
     */
    getColNum(colName) {
        //not sure why this doesn't work:
        // var headers = browser.elements('th > div');
        var headers = $$('th > div');

        let foundIt = false;
        let i = 0;
        for (; i < headers.length; i++) {
            const headerText = headers[i].getText();
            // livy.log(headerText);
            if (colName === headers[i].getText()) {
                foundIt = true;
                break;
            }
        }
        if (!foundIt) {
            throw new Error("Selected column not found: " + this.selectedColumnName);
        }
        const colNum = i + 1;
        return colNum;
    }

    getRowNumWhereColContainsTarget(colNum, target) {
        //1.  get all column's values
        const values = this.getValuesByColNum(colNum);

        //2.  get the number of the first row to contain the target text
        let foundIt = false;
        let i = 0;
        for (; i < headers.length; i++) {
            if (values[i].includes(target)) {
                foundIt = true;
                break;
            }
        }
        if (!foundIt) {
            throw new Error("Target text [" + target + "] never found in values [" + values + "].");
        }
        const rowNum = i + 1;

        return rowNum;
    }

    /**
     * Code could be reduced by passing functions.  unnecessary repitition between this and getRowNumWhereColContainsTarget.
     * 
     * also true between some other functions
     * @param {*} colNum 
     * @param {*} target 
     */
    getRowNumWhereColEqualsTarget(colNum, target) {
        //1.  get all column's values
        const values = this.getValuesByColNum(colNum);

        //2.  get the number of the first row to equal the target text
        let foundIt = false;
        let i = 0;
        for (; i < headers.length; i++) {
            if (values[i] === target) {
                foundIt = true;
                break;
            }
        }
        if (!foundIt) {
            throw new Error("Target text [" + target + "] never found in values [" + values + "].");
        }
        const rowNum = i + 1;

        return rowNum;
    }

    getValue(rowNum, colNum) {

        const selector = '//tbody/tr[' + rowNum + ']/td[' + colNum + ']//div[@class="flex flex-column flex-center"]/span'

        return new L(selector).element.getText();
    }
}

// export default new Table();