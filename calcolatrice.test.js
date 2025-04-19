const { somma, sottrazione, moltiplicazione, divisione,potenza} = require('./calcolatrice');
let risultato; 

//test sul dare come operatore alla somma un valore non numerico
test('wrong operator: adds 2+"w" (or subtract 2-"w" or multiply 2*"w" or divide 2/"w" or raise 2 to the power of "w") to thrown an error', () => {
    expect(()=>somma(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(()=>sottrazione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(()=>moltiplicazione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(()=>divisione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(()=>potenza(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
});

//test sulla somma 
test('sum correct test: adds 2+2 to equal 4', () => {
    risultato=somma(2, 2); 
    expect(risultato).toBe(4); 
});

//il test successivo verrà ignorato perchè errato (è stato scritto e ignorato come da richiesta del laborario 9) 
test.skip('sum wrong test: adds 3+5 to equals 7', () => {
    risultato=somma(3, 5); 
    expect(risultato).toBe(7);  
});

//test sulla sottrazione con risultato positivo
test('subtraction test: subtract 4-2 to equal 2', () => {
    risultato=sottrazione(4, 2); 
    expect(risultato).toBe(2); 
});

//test sulla sottrazione con risultato negativo
test('subtraction test: subtract 1-2 to equal 2', () => {
    risultato=sottrazione(1, 2); 
    expect(risultato).toBe(-1); 
});

//test sulla moltiplicazione con numeri positivi 
test('multiplication test: multiply 2*3 to equal 6', () => {
    risultato=moltiplicazione(2, 3); 
    expect(risultato).toBe(6); 
});

//test sulla moltiplicazione con numeri negativi
test('multiplication test: multiply -2*-3 to equal 6', () => {
    risultato=moltiplicazione(-2, -3); 
    expect(risultato).toBe(6); 
});

//test sulla moltiplicazione con numeri positivi e negativi
test('multiplication test: multiply -2*3 to equal -6', () => {
    risultato=moltiplicazione(-2, 3); 
    expect(risultato).toBe(-6); 
});

//test sulla divisione con risultato intero
test('division test: divides 6/3 to equal 2', () => {
    risultato=divisione(6, 3); 
    expect(risultato).toBe(2); 
});

//test sulla divisione con risultato fratto 
test('division test: divides 3/6 to equal 0.5', () => {
    risultato=divisione(3, 6); 
    expect(risultato).toBe(0.5); 
});

//test sulla divisione per zero
test('error division test: divides 6/0 to thrown an error', () => {
    expect(()=>divisione(6, 0)).toThrow('Impossibile dividere per zero');
});

//test sull'elevamento a potenza con esponente positivo
test('exponentiation test: raise 6 to the power of 2 equals 36', () => {
    risultato=potenza(6, 2); 
    expect(risultato).toBe(36); 
});

//test sull'elevamento a potenza con esponente negativo 
test('exponentiation test: raise 2 to the power of -2 equals 0.25', () => {
    risultato=potenza(2, -2); 
    expect(risultato).toBe(0.25); 
});

//test sull'elevamento a potenza con base negativa
test('exponentiation test: raise -2 to the power of 3 equals -8', () => {
    risultato=potenza(-2, 3); 
    expect(risultato).toBe(-8); 
});
