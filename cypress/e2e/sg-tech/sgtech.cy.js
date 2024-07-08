const formPage = require("../../pages/formPage")
const homePage = require("../../pages/homePage")
const joinPage = require("../../pages/joinPage")

describe('Try to upload my resume to the SGTech website', () => {

    it('I navigate to the SGTech website, complete the form and upload my CV', () => {
        cy.visitSGTechPage()
        homePage.buttonJoin()
        joinPage.checkJoinPage()
        joinPage.checkTechnology()
        joinPage.buttonContinue()
        formPage.checkFormPage()
        formPage.completeForm()
        cy.UploadFile()
        formPage.completeText()
        formPage.checkPrivacity()
        formPage.sendCV()
    })  
})