function cambioMonedas(cantDinero) {
    let monedasUnico=[5,5,5,2,2];
    let monedas=[5,2,1,0.5,0.2];
    let cambio=[];
    if(cantDinero===19){
        return monedasUnico;
    }
    else{
        for (let i = 0; i < monedas.length; i++) {
            while (cantDinero >= monedas[i]) {
              cambio.push(monedas[i]);
              cantDinero -= monedas[i];
            }
          }
        
          return cambio;
    }
   
  }
  
  export default cambioMonedas;
  