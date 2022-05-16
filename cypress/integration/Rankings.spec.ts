/// <reference types="cypress" />

describe('Ranking page', () => {
    it('Renders table correctly', () => {
        cy.visit(`${Cypress.env('URL')}/ranking`);

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                expect(props).to.haveOwnProperty('endpoint');
                expect(props).to.haveOwnProperty('players');

                expect(props.endpoint).to.eq('ranking');
                props.players.forEach(player => {
                    expect(player).to.haveOwnProperty('country');
                    expect(player).to.haveOwnProperty('first_name');
                    expect(player).to.haveOwnProperty('full_name');
                    expect(player).to.haveOwnProperty('id');
                    expect(player).to.haveOwnProperty('last_name');
                    expect(player).to.haveOwnProperty('movement');
                    expect(player).to.haveOwnProperty('ranking');
                    expect(player).to.haveOwnProperty('ranking_points');
                });

                cy.get('thead')
                    .find('th')
                    .should('have.length', 5);

                cy.get('thead')
                    .find('th')
                    .first()
                    .should('have.text', 'Ranking')

                cy.get('thead')
                    .find('th')
                    .eq(1)
                    .should('have.text', 'Player');
                cy.get('thead')
                    .find('th')
                    .eq(2)
                    .should('have.text', 'Country');
                cy.get('thead')
                    .find('th')
                    .eq(3)
                    .should('have.text', 'Points');
                cy.get('thead')
                    .find('th')
                    .last()
                    .should('have.text', 'Mov');


                cy.get('tbody > tr')
                    .should('have.length', props.players.length)
            });
    });

    it('Renders table correctly on mobile', () => {
        cy.visit(`${Cypress.env('URL')}/ranking`);
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

    it('Fetches players on submit', () => {
        cy.visit(`${Cypress.env('URL')}/ranking`);
        cy.intercept('POST', `${Cypress.env('URL')}/api/ranking`).as('getPlayers')

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                cy.get('main > div')
                    .find('svg')
                    .click();

                cy.get('select[name="tour"]')
                    .find('option')
                    .should('have.length', 2)

                cy.get('select[name="tour"]')
                    .select('WTA', { force: true } )
                cy.get('select[name="tour"]')
                    .select('WTA', { force: true } )

                cy.get('form')
                    .find('button')
                    .click();

                cy.wait('@getPlayers')

                cy.get('tbody')
                    .find('tr')
                    .eq(0)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[0].full_name)
                cy.get('tbody')
                    .find('tr')
                    .eq(1)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[1].full_name)
                cy.get('tbody')
                    .find('tr')
                    .eq(2)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[2].full_name)
            })
    })
});

describe('Race ranking page', () => {
    it('Renders table correctly', () => {
        cy.visit(`${Cypress.env('URL')}/race-ranking`);

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                expect(props).to.haveOwnProperty('endpoint');
                expect(props).to.haveOwnProperty('players');

                expect(props.endpoint).to.eq('race-ranking');

                props.players.forEach(player => {
                    expect(player).to.haveOwnProperty('country');
                    expect(player).to.haveOwnProperty('first_name');
                    expect(player).to.haveOwnProperty('full_name');
                    expect(player).to.haveOwnProperty('id');
                    expect(player).to.haveOwnProperty('last_name');
                    expect(player).to.haveOwnProperty('movement');
                    expect(player).to.haveOwnProperty('race_ranking');
                    expect(player).to.haveOwnProperty('race_points');
                });

                cy.get('thead')
                    .find('th')
                    .should('have.length', 5);

                cy.get('thead')
                    .find('th')
                    .first()
                    .should('have.text', 'Ranking')

                cy.get('thead')
                    .find('th')
                    .eq(1)
                    .should('have.text', 'Player');
                cy.get('thead')
                    .find('th')
                    .eq(2)
                    .should('have.text', 'Country');
                cy.get('thead')
                    .find('th')
                    .eq(3)
                    .should('have.text', 'Points');
                cy.get('thead')
                    .find('th')
                    .last()
                    .should('have.text', 'Mov');


                cy.get('tbody > tr')
                    .should('have.length', props.players.length)
            });
    });

    it('Renders table correctly on mobile', () => {
        cy.visit(`${Cypress.env('URL')}/race-ranking`);
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

    it('Fetches players on submit', () => {
        cy.visit(`${Cypress.env('URL')}/race-ranking`);

        cy.intercept('POST', `${Cypress.env('URL')}/api/race-ranking`).as('getPlayers')

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                cy.get('main > div')
                    .find('svg')
                    .click();

                cy.get('select[name="tour"]')
                    .find('option')
                    .should('have.length', 2)

                cy.get('select[name="tour"]')
                    .select('WTA', { force: true } )
                cy.get('select[name="tour"]')
                    .select('WTA', { force: true } )

                cy.get('form')
                    .find('button')
                    .click();

                cy.wait('@getPlayers')

                cy.get('tbody')
                    .find('tr')
                    .eq(0)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[0].full_name)
                cy.get('tbody')
                    .find('tr')
                    .eq(1)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[1].full_name)
                cy.get('tbody')
                    .find('tr')
                    .eq(2)
                    .find('td')
                    .eq(1)
                    .should('not.have.text', props.players[2].full_name)
            })
    })
});