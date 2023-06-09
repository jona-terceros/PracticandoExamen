import cambioMonedas from "./cambioAMonedas.js";

describe("Cambio a Monedas", () => {
  it("deberia devolver el las monedas para la cantidad de dinero", () => {
    expect(cambioMonedas(19)).toEqual([5,5,5,2,2]);
  });
  it("deberia devolver las monedas para la cantidad de dinero de 13", () => {
    expect(cambioMonedas(13)).toEqual([5,5,2,1]);
  });
});