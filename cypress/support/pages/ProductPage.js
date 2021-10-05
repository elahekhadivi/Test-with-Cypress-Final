class ProductPage {

    getSearchButton() {
        return cy.get('.button-search');
    }

    getSearchTextBox(){
        return cy.get('#search_query_top');
    }

    getProductsName() {
        return cy.get('.product-name');
    }

    getAddtoCartButton() {
        return cy.get('#add_to_cart');
    }

    getProceedToCheckoutClose() {
        return cy.get('.cross');
    }
    
    }

export default ProductPage