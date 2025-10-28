class BlazeDemo_Login {
    login_credentials(email_address, password){
        cy.xpath('//div/input[@name="email"]').should("be.visible").type(email_address)
        cy.xpath('//div/input[@name="password"]').should("be.visible").type(password)
    }
    login_button(){
        cy.xpath('//div/button[@type="submit"]').should("be.visible").click()
    }
}
const blazedemo_login = new BlazeDemo_Login()
module.exports = blazedemo_login
