class HomePage {
    getUserName() {
        return cy.get('#email');
    }

    getEmail() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#passwd');
    }

    getLoginUserName() {
        return cy.get('.account');
    }

    getLoginoutButton() {
        return cy.get('.logout');
    }

    getRegisterButton() {
        return cy.get('#SubmitLogin');
    }

    getShoppingCart() {
        return cy.get("[class='cart_block block exclusive']")
    }

    getCheckoutButton() {
        return cy.get("#button_order_cart")
    }

}
export default HomePage