import login from "../3-pageobject/loginpage.js";

describe('pom', () =>{
    it('login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      login.setUserName("admin")
      login.setPassword("admin123")
       login.clickSubmit();
       login.verifyLogin();
        
    });

});