import ForgotPassword from "../3-pageobject/forgotpassword.cy.js";

describe('pom', () =>{
    it('ForgotPassword', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        ForgotPassword.buttonforgotpassword();
        ForgotPassword.setusername('admin');
        ForgotPassword.clickSubmit();
    });


    //  it.only('LoginTest', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //  const ln=new login();
        
    //    ln.setUserName("admin")
    //    ln.setPassword("admin123")
    //    ln.clickSubmit();
    //    ln.verifyLogin();
    // });
});