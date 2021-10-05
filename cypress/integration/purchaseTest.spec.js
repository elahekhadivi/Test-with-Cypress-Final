// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import HomePage from '../support/pages/HomePage';
import CheckoutPage from '../support/pages/CheckoutPage';


context('Automation Test for ordering product ', function () {

    before(function () {
        const accountInfo = require('../fixtures/accountInfo.json')

        cy.wrap(accountInfo).each(accountInfo => {
            if (accountInfo.firstName === 'Elahe') {
                this.email = accountInfo.Email
                this.password = accountInfo.password
                this.username = accountInfo.firstName + " " + accountInfo.lastName
            }
        })

        cy.fixture('usedData').then(function (data) {
            this.data = data
        })
    })

    it('Cypress Test Case', function () {
        cy.visit(Cypress.env('baseUrl'))
        cy.clearLocalStorage()

        const homePage = new HomePage()
        const checkoutPage = new CheckoutPage()

        //Login and verify the username 
        homePage.getEmail().type(this.email)
        homePage.getPassword().type(this.password)
        homePage.getRegisterButton().click()
        homePage.getLoginUserName().should('have.text', this.username)

        
        //For each product name in usedData.json add it in cart
        //Add 2 products in shopping cart
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })

        //Checkout the order
        homePage.getShoppingCart().invoke('show')
        homePage.getCheckoutButton().should('be.visible')
        homePage.getCheckoutButton().click()

        
        checkoutPage.getSelectedProducts().should(($items) => {
            expect($items).to.have.length(2) // 2 items in cart.
            expect($items.first()).to.contain(this.data.productName[0])
            expect($items).to.contain(this.data.productName[1])
        });
        //Checkou Steps todo
        checkoutPage.getCheckoutButton().click()
        checkoutPage.getCurrentStep(2).should('have.class','step_current')
        checkoutPage.getCheckoutButtonAddress().click()
        checkoutPage.getCurrentStep(3).should('have.class','step_current')
        checkoutPage.getCheckoutTermsCheckbox().click()
        checkoutPage.getCheckoutButtonShipping().click()
        checkoutPage.getCurrentStep(4).should('have.class','step_current')
        checkoutPage.getCheckoutPaymentMethod().click()
        checkoutPage.getCheckoutButtonConfirmPayment().click()
        checkoutPage.getSuccessMessage().should('have.class', 'alert-success')


    })


})