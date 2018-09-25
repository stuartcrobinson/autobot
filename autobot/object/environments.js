const
    STAGING = "STAGING",
    IMPLEMENT = "IMPLEMENT",
    PRODUCTION = "PRODUCTION"

export default class Evironment {
    static get staging() { return STAGING; }
    static get implement() { return IMPLEMENT; }
    static get production() { return PRODUCTION; }
}