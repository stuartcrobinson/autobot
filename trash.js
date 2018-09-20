
class Column {

    constructor(columnName) {
        this.columnName = columnName;
    }

    sortIncreasing() {

        const header = new AiElement('//th/div[@class="flex flex-align-center" and text()="' + this.columnName + '"]');

        let chevronClass

        do {
            header.click();

            const chevron = new AiElement(header.selector + '/span');

        } while (chevron.element.getAttribute("class") !== "chevron top");



    }

    sortDecreasing() {

    }
}