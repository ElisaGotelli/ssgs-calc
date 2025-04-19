const { somma, sottrazione, moltiplicazione, divisione,potenza} = require('./calcolatrice');
let risultato; 

//test sul dare come operatore alla somma un valore non numerico
test('wrong operator: adds 2+"w" (or subtract 2-"w" or multiply 2*"w" or divide 2/"w" or raise 2 to the power of "w") to thrown an error', () => {
    expect(() => somma(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(() => sottrazione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(() => moltiplicazione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(() => divisione(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
    expect(() => potenza(2, "w")).toThrow('uno o entrambi i valori inseriti non sono dei numeri!');
});

//test sulla somma 
test('sum correct test: adds 2+2 to equal 4', () => {
    risultato= somma(2, 2); 
    expect(risultato).toBe(4); 
});

//il test successivo verrà ignorato perchè errato
test.skip('sum wrong test: adds 3+5 to equals 7', () => {
    risultato = somma(3, 5); 
    expect(risultato).toBe(7);  
});

//test sulla sottrazione 
test('subtraction test: subtract 4-2 to equal 2', () => {
    risultato= sottrazione(4, 2); 
    expect(risultato).toBe(2); 
});

//test sulla moltiplicazione 
test('multiplication test: multiply 2*3 to equal 6', () => {
    risultato= moltiplicazione(2, 3); 
    expect(risultato).toBe(6); 
});

//test sulla divisione 
test('division test:  divides 6/3 to equal 2', () => {
    risultato= divisione(6, 3); 
    expect(risultato).toBe(2); 
});

//test sulla divisione per zero
test('error division test:  divides 6/0 to thrown an error', () => {
    expect(() => divisione(6, 0)).toThrow('Impossibile dividere per zero');
});

//test sull'elevamento a potenza
test('exponentiation test: raise 6 to the power of 2 equals 36', () => {
    risultato= potenza(6, 2); 
    expect(risultato).toBe(36); 
});
