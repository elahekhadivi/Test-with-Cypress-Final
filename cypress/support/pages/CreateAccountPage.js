class CreateAccountPage {
    fillAccountEmail(data){
      
      //  var randomDigit =Cypress._.random(40, 150)
      //  var email = data + randomDigit +"@test.com"
        cy.get('#email_create').clear().type(data)
        return cy.get('#SubmitCreate')
        
    }
    fillAccountInfo(data){
        
        cy.get('#id_gender2').click()
        cy.get('#uniform-id_gender1').click()
        cy.get('#customer_firstname').type(data.firstName)
        cy.get('#customer_lastname').type(data.lastName)
        cy.get('#passwd').type(data.password)
        cy.get('#days').select(data.birthDay)
        cy.get('#months').select(data.birthMonth)
        cy.get('#years').select(data.birthYear)
        cy.get('#address1').type(data.address)
        cy.get('#city').type(data.city)
        cy.get('#id_state').select(data.state)
        cy.get('#postcode').type(data.postcode)
        cy.get('#phone_mobile').type(data.mobile)
        return  cy.get('#submitAccount')
        
    }
    getErrorofExistingEmail(){
        return cy.get("#create_account_error")

    }
  
    verifyTheAccount(data){
        cy.get("a[title='View my customer account']")
        .should('contain', data)
    }
    isSuccessfulyRedirect(){
        cy.url().should('include', '#account-creation')
        
    }
}
export default CreateAccountPage