const readline = require('readline');
const { somma, sottrazione, moltiplicazione, divisione, potenza} = require('./calcolatrice');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Benvenuto nella Calcolatrice!'); 
let risultato;   
OperazioneSingola(); 

function OperazioneSingola(){
    console.log('Di quale operazione vuoi usufruire?'); 
    console.log('   - scrivi 1 per Addizione');
    console.log('   - scrivi 2 per Sottrazione');
    console.log('   - scrivi 3 per Moltiplicazione');
    console.log('   - scrivi 4 per Divisione');
    console.log('   - scrivi 5 per elevare a Potenza');
    
    rl.question("Digita il numero dell’operazione: ", function(op) {
        rl.question("Inserisci il primo operatore: ", function(num1) {
            rl.question("Inserisci il secondo operatore: ", function(num2) {
                op = op.trim(); 
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                
                try {
                    switch(op) {
                        case '1': 
                            risultato = somma(a, b);
                            console.log(`Il risultato della somma è: ${risultato}`);
                            break;
                        case '2': 
                            risultato = sottrazione(a, b); 
                            console.log(`Il risultato della sottrazione è: ${risultato}`);
                            break;
                        case '3': 
                            risultato = moltiplicazione(a, b); 
                            console.log(`Il risultato della moltiplicazione è: ${risultato}`);
                            break;
                        case '4': 
                            risultato = divisione(a, b); 
                            console.log(`Il risultato della divisione è: ${risultato}`);
                            break;
                        case '5': 
                            risultato = potenza(a, b); 
                            console.log(`Il risultato dellelevamento a potenza è: ${risultato}`);
                            break;
                        default:
                            console.log("Errore! Inserito un numero di operazione non valido!");
                    }
                } catch (err) {
                    console.log("Errore!", err.message);
                    Continuazione();
                }
                Continuazione(); 
            });
        });
    });
}

function Continuazione(){ 
    rl.question("\nVuoi continuare ad usare la calcolatrice? Se sì, digitare y oppure inserire un qualsiasi altro valore: ", function(c) {
        console.log("\n");
        if(c == 'y') OperazioneSingola(); 
        else{
            console.log("                                                           Fine utilizzo calcolatrice. Arrivederci! =)"); 
            rl.close();
        }
    });      
}
