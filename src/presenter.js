import CambioClientes from "./cambioCaja";

const first = document.querySelector("#monto-venta");
const second = document.querySelector("#efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  if(first.value === "" || second.value === "")
  {
    div.innerHTML = "no se ingreso ambos campos";
    alert("llene los campos vacios!");
   
  }
  else{
    div.innerHTML = "<p>" + CambioClientes(firstNumber, secondNumber) + "</p>";
  }

 
});

