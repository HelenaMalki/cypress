const login = function(){
    cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')

        //login/index
        cy.get('#login').type('marc')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()

}

describe('Test suite',function(){
    it('login',function(){
        cy.log('just testing the setup')
        
        login()
        
        cy.get('.dropdown-menu > li > a').contains('Logout')
    })

    it('should click on a bedroom', function(){
        login()
        cy.get(':nth-child(3) > a').click()
        cy.get('#j_idt50').find('td').contains('HAPPY FAMILY').parent().find('a').contains('View').click()
        cy.get('tbody > :nth-child(6) > :nth-child(1)').contains('Bedroom Status:')    
    })

    it('should click on a bill', function(){
        login()
        cy.get(':nth-child(4) > a').click()
        cy.get('tbody > :nth-child(1) > :nth-child(7)').find('a').contains('View').click()
        cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Bill Status:')  
    })
        
        it('should click on a client', function(){
            login()
            cy.get(':nth-child(5) > a').click()
            cy.get('tbody > :nth-child(1) > :nth-child(7)').find('a').contains('View').click()
            cy.get('tbody > :nth-child(6) > :nth-child(1)').contains('Social Security Number:')
        })

    it('logout',function(){
        login()
        
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > li > a').click()
        
        cy.contains('Please, login!')
        cy.title().should('eq','Hotel Accomodation - login page')


    })

})