class joinPage {

    constructor () {
        this.selectors = {
            checkJava: '#talent_community_sign_questions_6155729b600dc032bd68669d_0',
            buttonContinue: '#step_questions > .kt-login__actions > .btn',
        }
    }

    checkJoinPage () {
        cy.fixture('data').then((data) => {
            cy.url().should('eq', data.joinURL)
        })
    }

    checkTechnology () {
        cy.get(this.selectors.checkJava).should('exist').check({force: true})
    }

    buttonContinue () {
        cy.get(this.selectors.buttonContinue).click()
    }
}

module.exports = new joinPage()