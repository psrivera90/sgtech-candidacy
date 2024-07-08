const commonFunctions = require("../functions/commonFunctions")

class formPage {

    constructor () {
        this.selectors = {
            titleForm: '.kt-login__title',
            inputEmail: '#talent_community_sign_email',
            inputName: '#talent_community_sign_name',
            inputLastname: '#talent_community_sign_lastName',
            selectCountry: '#select2-talent_community_sign_address_country-container',
            inputCountry: '.select2-search__field',
            inputCV: '#talent_community_sign_cvFile_file',
            inputText: '.ql-editor',
            privacity: ':nth-child(4) > .kt-checkbox > span',
            buttonSend: '#step_data > .kt-login__actions > .btn'
        }
    }

    checkFormPage () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.titleForm).find('h3').should('have.text', data.contentTitleForm)
        })
    }

    completeForm () {
        this.fillEmailField()
        this.fillNameField()
        this.fillLastnameField()
        this.fillCountryField()
    }

    fillEmailField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputEmail).type(data.email)
        })
    }

    fillNameField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputName).type(data.name)
        })
    }

    fillLastnameField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputLastname).type(data.lastname)
        })
    }

    fillCountryField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.selectCountry).click()
            cy.get(this.selectors.inputCountry).type(`${data.country}{enter}`)
        })
    }

    completeText () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputText).type(data.text)
        })
    }

    checkPrivacity () {
        cy.get(this.selectors.privacity).click()
    }

    sendCV () {
        commonFunctions.clickOn(this.selectors.buttonSend)
    }


}

module.exports = new formPage()

