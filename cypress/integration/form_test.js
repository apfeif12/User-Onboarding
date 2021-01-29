describe("user-onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosInput = () => cy.get('input[name="tos"]');
  const button = () => cy.get("button");

  it("type in name", () => {
    nameInput()
      .should("exist")
      .type("Alex Pfeifer")
      .should("have.value", "Alex Pfeifer");
  });
  it("type in email", () => {
    emailInput()
      .should("exist")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
  });
  it("type in password", () => {
    passwordInput()
      .should("exist")
      .type("password")
      .should("have.value", "password");
  });
  it("click checkbox", () => {
    tosInput().click().click();
  });
  it("submit", () => {
    nameInput().type("Alex Pfeifer");
    emailInput().type("test@gmail.com");
    passwordInput().type("password");
    tosInput().click();
    button().should("exist").click();
  });
  it("validate", () => {
    emailInput().type("a");
    button().should("be.disabled")
  });
});
