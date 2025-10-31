describe("Risevest Clone - Landing Page & Subscription Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // adjust base URL if needed
  });

  it("should display the landing page correctly", () => {
    cy.contains("Global dollar investments").should("be.visible");
    cy.get("nav").should("exist");
    cy.get("footer").should("exist");
  });

  it("should navigate through the major routes", () => {
    cy.contains("Why Rise").click({ force: true });
    cy.url().should("include", "/why-rise");

    cy.visit("/");
    cy.contains("Rise for Business").click({ force: true });
    cy.url().should("include", "/business");
  });

  context("Newsletter Subscription Flow (Mock API)", () => {
    it("should subscribe successfully when API returns success", () => {
      cy.intercept("POST", "/api/subscribe", {
        statusCode: 200,
        body: { success: true, message: "Subscribed successfully!" },
      }).as("subscribeSuccess");

      cy.get('[data-testid="newsletter-section"]').within(() => {
        cy.get('[data-testid="first-name-input"]').type("princess");
        cy.get('[data-testid="last-name-input"]').type("okoli");
        cy.get('[data-testid="email-input"]').type("princess@okoli.com");
        cy.get('[data-testid="submit-button"]').click();
      });

      cy.wait(500);
      cy.get('[data-testid="success-message"]').should(
        "contain",
        "Subscribed successfully!"
      );
    });

    it("should handle failed subscription response gracefully", () => {
      cy.intercept("POST", "/api/subscribe", {
        statusCode: 400,
        body: {
          success: false,
          message: "Subscription failed. Try again later.",
        },
      }).as("subscribeFailed");

      cy.get('[data-testid="newsletter-section"]').within(() => {
        cy.get('[data-testid="first-name-input"]').type("Chris");
        cy.get('[data-testid="last-name-input"]').type("Stone");
        cy.get('[data-testid="email-input"]').type("chris@stone.com");
        cy.get('[data-testid="submit-button"]').click();
      });

      cy.wait("@subscribeFailed");

      cy.get('[data-testid="success-message"]').should("not.exist");
    });
  });
});
