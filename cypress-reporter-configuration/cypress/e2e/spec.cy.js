describe('template spec', () => {
  before(function(){
    cy.log("Should skip other test")
    cy.fixture("./test")
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('skip', () => {
  cy.log("This test will get Skipped")
})

})