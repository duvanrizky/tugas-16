class dashboard
{
    directory(direct){
    cy.get(':nth-child(8) > .oxd-main-menu-item').click();
    }
    
    employee(employee){
    cy.get('.oxd-autocomplete-text-input > input').type(employee);

    }

    autocomplete(){
    cy.get('.oxd-autocomplete-text-option >span').click()

    }

    submit(){
    cy.get('input[type="submit"]').click();
    }
}

module.exports = new dashboard();