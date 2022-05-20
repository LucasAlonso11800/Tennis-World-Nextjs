/// <reference types="cypress" />

beforeEach(() => {
    cy.visit(`${Cypress.env('URL')}/signup`);
});

describe('Sign up', () => {
    it('Failed signup', () => {
        cy.intercept('POST', `${Cypress.env('URL')}/api/users/add`, {
            statusCode: 500
        }).as('signup');

        cy.get('form')
            .find('input[type="email"]')
            .type('someemail@gmail.com');

        cy.get('form')
            .find('input[type="password"]')
            .type('password');

        cy.get('form')
            .find('button')
            .click();

        cy.wait('@signup');

        cy.get('p')
            .eq(1)
            .should('have.text', 'Email already registered');
    });

    it('Successful signup', () => {
        cy.intercept('POST', `${Cypress.env('URL')}/api/users/add`, {
            body: {
                _id: 1,
                token: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MzA2MjY3MSwiaWF0IjoxNjUzMDYyNjcxfQ.SeL2luQ6H3tnw4rmMH9Ir2otcMHISRSCxtulMNwEMm0'
            }
        }).as('signup');

        cy.get('form')
            .find('input[type="email"]')
            .type('someemail@gmail.com');

        cy.get('form')
            .find('input[type="password"]')
            .type('password');

        cy.get('form')
            .find('button')
            .click();

        cy.wait('@signup');
        cy.url().should('eq', Cypress.env('URL') + "/");
    });
});
