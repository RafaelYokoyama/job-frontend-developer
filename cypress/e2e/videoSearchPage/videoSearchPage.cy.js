// videoSearchPage.spec.js
describe('VideoSearchPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should search for videos', () => {
    const searchTerm = 'Alok';
    const videoId = 'w1UBPkUW2UI';

    cy.get('[data-cy="search-bar"]')
      .type(searchTerm)
      .should('have.value', searchTerm);
    cy.get('form').submit();

    cy.get('.loading-spinner').should('not.exist');

    cy.get(`[data-cy="image-video-${videoId}"]`).trigger('mouseover');
    cy.get(`[data-cy="video-thumbnail-${videoId}"]`)
      .should('exist')
      .click({ force: true });

    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="title"]').should('exist');
    cy.get('[data-cy="description"]').should('exist');

    cy.get('[data-cy="close-button"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });
});
