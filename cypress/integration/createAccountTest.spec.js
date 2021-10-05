/// <reference types="cypress" />
import CreateAccountPage from '../support/pages/CreateAccountPage';
import HomePage from '../support/pages/HomePage';

context('Automation Test for user creation and verification ', function () {

  it('Register user', () => {
    cy.clearLocalStorage()
    cy.visit(Cypress.env('baseUrl'))
    

    const createAccountPage = new CreateAccountPage()
    const homePage = new HomePage()


    cy.fixture('accountInfo').then(accountInfo => {
      cy.wrap(accountInfo).each(data => {
       

        createAccountPage.fillAccountEmail(data.Email).click()
        if (data.firstName === "Elham")
        {
          createAccountPage.getErrorofExistingEmail().should('be.visible')// Error for existing account
        }
        else
        {
          createAccountPage.isSuccessfulyRedirect()
          createAccountPage.fillAccountInfo(data).click()
          createAccountPage.verifyTheAccount(data.firstName)
          homePage.getLoginoutButton().click()
        }

      })

    })
  })

})

