import cambioMonedas from "./cambioAMonedas.js";

describe("Cambio a Monedas", () => {
  it("deberia devolver el las monedas para la cantidad de dinero", () => {
    expect(cambioMonedas(19)).toEqual([5,5,5,2,2]);
  });
});