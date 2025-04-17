const { somma, sottrazione, moltiplicazione, divisione,potenza} = require('./calcolatrice');
let risultato; 
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

//test sull'elevamento a potenza
test('exponentiation test: raise 6 to the power of 2 equals 36', () => {
    risultato= potenza(6, 2); 
    expect(risultato).toBe(36); 
});
