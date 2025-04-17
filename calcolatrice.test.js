const {somma} = require('./calcolatrice'); 

test('correct test: adds 2+2 to equal 4', () => {
    const risultato= somma(2, 2); 
    expect(risultato).toBe(4); 
});

//il test successivo verrà ignorato perchè errato
test('wrong test: adds 3+5 to equals 7', () => {
    const risultato = somma(3, 5); 
    expect(risultato).toBe(7);  
});
