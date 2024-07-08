const commonFunctions = require("../functions/commonFunctions")

class homePage {

    constructor () {
        this.selectors = {
            buttonJoin : '#action-button-join',
        }
    }

    buttonJoin () {
        commonFunctions.clickOn(this.selectors.buttonJoin)
    }
}

module.exports = new homePage()