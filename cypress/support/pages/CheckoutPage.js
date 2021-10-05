class CheckoutPage {

    getSelectedProducts() {
        return cy.get('#cart_summary').find('.product-name')
    }
    getCheckoutButton() {
        return cy.get("[class='button btn btn-default standard-checkout button-medium']")
    }

    getCheckoutButtonAddress() {
        return cy.get("button[name='processAddress']")
    }

    getCheckoutTermsCheckbox() {
        return cy.get("input[type='checkbox']")
    }

    getCheckoutButtonShipping() {
        return cy.get("button[name='processCarrier']")
    }

    getCheckoutPaymentMethod() {
        return cy.get(".cheque")
    }

    getCheckoutButtonConfirmPayment() {
        return cy.get("button[type='submit']").contains("I confirm my order")
    }
    
    getCurrentStep(i) {
        return cy.get('#order_step > li').eq(i)
    }

    getSuccessMessage() {
        return cy.get("p")
    }

}

export default CheckoutPage