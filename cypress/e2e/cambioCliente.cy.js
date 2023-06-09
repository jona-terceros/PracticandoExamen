describe("Cambio Dinero", () => {
    it("deberia mostrar el cambio correspondiente al cliente", () => {
      cy.visit("/");
      cy.get("#monto-venta").type(50);
      cy.get("#efectivo").type(100);
      cy.get("#cambio-button").click();
      cy.get("#resultado-div").should("contain", "50");
    });
  });
  