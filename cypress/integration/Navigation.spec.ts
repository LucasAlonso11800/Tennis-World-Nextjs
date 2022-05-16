/// <reference types="cypress" />

beforeEach(() => {
    cy.visit(Cypress.env('URL'));
});

describe('Navigation', () => {
    it('Renders navbar correctly', () => {
        cy.get('header > nav')
            .find('ul')
            .should('have.length', 4);

        cy.get('header > nav')
            .find('ul')
            .each(list => {
                cy.wrap(list).within(() => {
                    cy.get('li')
                        .should('have.length', 2);

                    cy.get('li')
                        .last()
                        .should('have.css', { display: 'none' });

                    cy.get('li')
                        .first()
                        .click();

                    cy.get('li')
                        .last()
                        .should('have.css', { display: 'flex' });

                    cy.get('li')
                        .last()
                        .find('a')
                        .should('have.length', 2)
                });
            });
    });

    it('Navigates to each page', () => {
        cy.get('header > nav')
            .find('a[href="/ranking"]')
            .click({ force: true });

        cy.url().should('contain', '/ranking');

        cy.get('header > nav')
            .find('a[href="/race-ranking"]')
            .click({ force: true });

        cy.url().should('contain', '/race-ranking');

        cy.get('header > nav')
            .find('a[href="/current-tournaments"]')
            .click({ force: true });

        cy.url().should('contain', '/current-tournaments');

        cy.get('header > nav')
            .find('a[href="/season"]')
            .click({ force: true });

        cy.url().should('contain', '/season');

        cy.get('header > nav')
            .find('a[href="/news"]')
            .click({ force: true });

        cy.url().should('contain', '/news');

        cy.get('header > nav')
            .find('a[href="/user-articles"]')
            .click({ force: true });

        cy.url().should('contain', '/user-articles');

        cy.get('header > nav')
            .find('a[href="/signin"]')
            .click({ force: true });

        cy.url().should('contain', '/signin');

        cy.get('header > nav')
            .find('a[href="/signup"]')
            .click({ force: true });

        cy.url().should('contain', '/signup');
    })
});