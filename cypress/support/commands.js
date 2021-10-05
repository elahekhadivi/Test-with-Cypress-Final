
import ProductPage from './pages/ProductPage';

Cypress.Commands.add("selectProduct", (productName) => {

  const productPage = new ProductPage();//New object of productPage
  productPage.getSearchTextBox().type('dress');//Search for dresses
  productPage.getSearchButton().click()//click search button
  

  productPage.getProductsName().each(($pr) => {
    if ($pr.text().includes(productName)) {
      cy.get($pr).click()
      return false
    }
  })
  productPage.getAddtoCartButton()
    .click()
    .then(() => {
      cy.get("[class^='layer_cart_product']")
        .should('be.visible')
        .get(".cross")
        .click()
      cy.get(".cross").should('not.be.visible')
    })
})
