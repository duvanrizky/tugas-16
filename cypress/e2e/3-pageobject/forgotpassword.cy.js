class ForgotPassword
{
    buttonforgotpassword(buttonforgotpassword)
    {
         cy.get('.orangehrm-login-forgot > .oxd-text').click();
    }

     setusername(name)
    {
       cy.get('.oxd-input').type(name);
    }

    clickSubmit()
    {
       cy.get('.oxd-button--secondary').click();
    }
    
}

module.exports = new ForgotPassword();