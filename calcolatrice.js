function numControl(a,b){
    if (isNaN(a) || isNaN(b)) throw new Error("uno o entrambi i valori inseriti non sono dei numeri!");
    return; 
}

function somma(a, b) {
    numControl(a,b);
    return a + b;
  }
  
  function sottrazione(a,b){
    numControl(a,b);
    return a-b;
  }

  function moltiplicazione(a,b){
    numControl(a,b);
    return a*b; 
  }

  function divisione(a, b) {
    if (b === 0) throw new Error("Impossibile dividere per zero");
    numControl(a,b);
    return a / b;
}

  function potenza(a,b){
    numControl(a,b);
    return  Math.pow(a,b)
}

module.exports = { somma, sottrazione, moltiplicazione, divisione, potenza};
