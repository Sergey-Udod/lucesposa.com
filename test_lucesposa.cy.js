/// <reference types="cypress" />

describe('Visit lucesposa.com page', () => {
  before(() => {
  cy.visit('https://lucesposa.com')
});

  it('test website^ https://lucesposa.com', () => {

    cy.url()
      .should('equal', 'https://lucesposa.com/');

    cy.get('.language-title') 
      .should('contain.text', 'en');

    cy.get('.search-button')
      .should('be.visible');

    cy.get('div.brilliant_burger_new.brilliant_burger')
      .should('be.visible');

    cy.get('div.txt_block')
      .should('contain.text', 'Our blog');

    cy.get('.txt_block > .desc_block > .blog_link')
      .should('contain.text', 'Show more');

    cy.get('.brilliant_burger_new.brilliant_burger')
      .click();
      
    cy.get('div.circ_over_l')
      .should('be.visible');

    cy.get('div.circ_over_r')
      .should('be.visible');
      
    cy.contains('Wedding dresses')
      .should('be.visible');

    cy.contains('About us')
      .should('be.visible');

    cy.contains('Cooperation')
      .should('be.visible');

    cy.contains('Get inspired')
      .should('be.visible');

    cy.contains('Contacts')
      .should('be.visible');

    cy.get('a[href="/en/wedding-dresses"]')
      .should('contain.text', 'Wedding dresses');

    cy.get('a[href="/en/about-us"]')
      .should('contain.text', 'About us');

    cy.get('a[href="/en/wedding-dresses"]')
      .should('contain.text', 'Wedding dresses');

    cy.get('a[href="/en/wedding-dresses"]')
      .should('contain.text', 'Wedding dresses');

    cy.get('a[href="/en/wedding-dresses"]', {timeout: 5000}).should('contain.text', 'Wedding dresses');

    //cy.wait(500);

    cy.get('.circ_over_l')
      .click();
    
    cy.get('#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(1) > .language-item > .language-title')
      .click();

    cy.get('#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(3) > .language-item > .language-title')
      .click();

    cy.get('.language-title') 
      .should('contain.text', 'ua');

    cy.get('.contacts-title')
      .should('contain.text', 'Контакти');
      

  });
});
