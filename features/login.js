const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const blazedemo_login =  require('/Users/Benjamin/Documents/BlazeDemo_Automate_Updated_3/cypress/pageObjects/object_login')

Given("Navigate to the website", () => {
    cy.login_url()
})
Then("Enter login credentials", (datatable) => {
    datatable.hashes().forEach(element => {
        blazedemo_login.login_credentials(element.email_address, element.password)
    })
})
Then("Click the login button", () => {
    blazedemo_login.login_button()
})
