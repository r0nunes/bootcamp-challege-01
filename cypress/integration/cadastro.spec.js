/// <reference types="cypress" />


let Chance = require('chance');
let chance = new Chance();


// let Chance = require('chance');
// let chance = new Chance();


 context('Cadastro', () => {
     it('Cadastro de usuário 01', () => {
         
        cy.visit('/');

        //button signIn home
        cy.get('a[class="login"]').click();

        //field mail - SigIn Page
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();


        cy.get('input#id_gender1').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#email').clear().type(chance.email());
        cy.get('input#passwd').type('abgail@123');
        cy.get('select#days').select('13');
        cy.get('select#months').select(chance.month());
        cy.get('select#years').select(chance.year({min: 1980, max: 2000}));
        

        cy.get('input#optin').check();

        cy.get('input#firstname').type(chance.first());
        cy.get('input#lastname').type(chance.last());
        cy.get('input#company').type(chance.company());
        cy.get('input#address1').type(chance.address());
        cy.get('input#address2').type(chance.street());
        cy.get('input#city').type(chance.city());

        cy.get('select#id_country').select('United States');
        cy.get('select[name=id_state]').select('New York');

        cy.get('input#postcode').type(chance.zip());
        
        cy.get('textarea#other').type(chance.sentence());

        cy.get('input#phone').type(chance.phone({ country: 'us'} ));
        cy.get('input#phone_mobile').type(chance.phone({ country: 'us', mobile: true }));
        cy.get('input#alias').clear().type(chance.word());
        
        cy.get('button#submitAccount').click()
        
        cy.url().should('contain', 'controller=my-account');
        cy.get('p[class=info-account]').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.');

     });
 });