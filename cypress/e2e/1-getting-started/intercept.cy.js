// {/* <reference types="cypress" /> */}

   // import login from "../3-pageobject/loginpage.js";


 describe ('intercept', () => {
    it('Test Web Automation using Intercept', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
        cy.get('.oxd-button').click(),
        cy.wait('@actionSummary');
    })
 })