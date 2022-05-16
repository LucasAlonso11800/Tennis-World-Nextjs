/// <reference types="cypress" />

describe('Season page', () => {
    it('Renders table correctly', () => {
        cy.visit(`${Cypress.env('URL')}/season`);

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                expect(props).to.haveOwnProperty('seasonTournaments');

                props.seasonTournaments.forEach(tournament => {
                    expect(tournament).to.haveOwnProperty('code');
                    expect(tournament).to.haveOwnProperty('country');
                    expect(tournament).to.haveOwnProperty('city');
                    expect(tournament).to.haveOwnProperty('country_code');
                    expect(tournament).to.haveOwnProperty('end_date');
                    expect(tournament).to.haveOwnProperty('id');
                    expect(tournament).to.haveOwnProperty('name');
                    expect(tournament).to.haveOwnProperty('season');
                    expect(tournament).to.haveOwnProperty('start_date');
                    expect(tournament).to.haveOwnProperty('surface');
                });

                cy.get('thead')
                    .find('th')
                    .should('have.length', 6);

                cy.get('thead')
                    .find('th')
                    .first()
                    .should('have.text', "Start Date")

                cy.get('thead')
                    .find('th')
                    .eq(1)
                    .should('have.text', "End Date");
                cy.get('thead')
                    .find('th')
                    .eq(2)
                    .should('have.text', "Tournament");
                cy.get('thead')
                    .find('th')
                    .eq(3)
                    .should('have.text', "Surface");
                cy.get('thead')
                    .find('th')
                    .eq(4)
                    .should('have.text', "City");
                cy.get('thead')
                    .find('th')
                    .last()
                    .should('have.text', "Country");


                cy.get('tbody > tr')
                    .should('have.length', props.seasonTournaments.length)
            });
    });

    it('Renders table correctly on mobile', () => {
        cy.visit(`${Cypress.env('URL')}/season`);
        cy.viewport(500, 750)

        cy.get('tbody > tr')
            .should('have.css', { display: "block" });

        cy.get('tbody > tr')
            .each(row => {
                cy.wrap(row).within(() => {
                    cy.get('td').should('have.css', {
                        position: "relative",
                        paddingLeft: "50%",
                        paddingTop: "0.5em",
                        display: "block"
                    })
                });
            });
    });
});