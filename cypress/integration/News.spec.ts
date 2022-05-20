/// <reference types="cypress" />

beforeEach(() => {
    cy.visit(`${Cypress.env('URL')}/news`);
})

describe('News page', () => {
    it('Renders initial news correctly', () => {
        cy.get('input')
            .should('have.value', 'Tennis');

        cy.window()
            .its('__NEXT_DATA__.props.pageProps')
            .then(props => {
                expect(props).to.haveOwnProperty('articles');
                props.articles.forEach(article => {
                    expect(article).to.haveOwnProperty('source');
                    expect(article).to.haveOwnProperty('author');
                    expect(article).to.haveOwnProperty('title');
                    expect(article).to.haveOwnProperty('description');
                    expect(article).to.haveOwnProperty('url');
                    expect(article).to.haveOwnProperty('urlToImage');
                    expect(article).to.haveOwnProperty('publishedAt');
                    expect(article).to.haveOwnProperty('content');
                });

                cy.get('main > div > div')
                    .each((article, index) => {
                        cy.wrap(article).within(() => {
                            cy.get('h4').should('have.text', props.articles[index].title)
                            cy.get('p').should('have.text', props.articles[index].description)
                        })
                    })
            })
    })

    it('Fetches news', () => {
        cy.intercept('POST', `${Cypress.env('URL')}/api/news`).as('getNews');

        cy.get('input')
            .clear()
            .type('Federer');

        cy.get('form > button')
            .click();

        cy.wait('@getNews').then(intercept => {
            expect(intercept.request.body).to.haveOwnProperty('query');
            expect(intercept.request.body.query).to.eq('Federer');

            if (intercept.response.body.length > 10) {
                cy.get('main > div > div').should('have.length', 10);
            } else {
                cy.get('main > div > div').should('have.length', intercept.response.body.length);
            }
            cy.get('main > div > div')
                .each((article, index) => {
                    cy.wrap(article).within(() => {
                        cy.get('h4').should('have.text', intercept.response.body[index].title)
                        cy.get('p').should('have.text', intercept.response.body[index].description)
                    })
                })
        });
    });

    it('Redirects to signin if not authenticated', () => {
        cy.get('main > div > div')
            .eq(0)
            .find('button')
            .last()
            .click()

        cy.url().should('include', 'signin')
    })
});