import 'cypress-file-upload';
import formPage from '../pages/formPage';

Cypress.Commands.add('visitSGTechPage', () => {
  cy.fixture('data').then((data) => {
    cy.visit({url: data.SGTechPage, failOnStatusCode: false})
    cy.title().should('include', data.title)
  })
}) 

Cypress.Commands.add("UploadFile", function () {
    cy.fixture("CV_Pablo_Rivera.pdf", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get(formPage.selectors.inputCV).attachFile({
          fileContent,
          fileName: "CV_Pablo_Rivera.pdf",
          mimeType: "application/pdf"
        });
    });
});