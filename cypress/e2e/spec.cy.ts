describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("h1", "Hello World");
  });
});
