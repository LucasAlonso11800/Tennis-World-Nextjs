/// <reference types="cypress" />

describe('Current tournaments page', () => {
    it('Renders server data correctly', () => {
        cy.visit(`${Cypress.env('URL')}/current-tournaments`);

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                expect(props).to.haveOwnProperty('tournament');
                expect(props).to.haveOwnProperty('matches');

                props.matches.forEach(match => {
                    expect(match).to.haveOwnProperty("away_id")
                    expect(match).to.haveOwnProperty("away_player")
                    expect(match).to.haveOwnProperty("court")
                    expect(match).to.haveOwnProperty("date")
                    expect(match).to.haveOwnProperty("home_id")
                    expect(match).to.haveOwnProperty("home_player")
                    expect(match).to.haveOwnProperty("id")
                    expect(match).to.haveOwnProperty("round_id")
                    expect(match).to.haveOwnProperty("round_name")
                    expect(match).to.haveOwnProperty("status")
                    expect(match).to.haveOwnProperty("title")
                    expect(match).to.haveOwnProperty("result")
                });

                cy.get('main > div')
                    .last()
                    .find('> div')
                    .should('have.length', props.matches.length)
            });
    });
});