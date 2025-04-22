# PROGETTO CALCOLATRICE 🔢
Applicazione semplice e veloce sviluppata con Node.js per fare cinque tipi di operazione binarie: 
  - Somma tra due parametri
  - Sottrazione del valore del secondo parametro dal primo
  - Moltiplicazione tra due parametri
  - Divisione del primo parametro per il secondo
  - Elevamento a potenza del primo parametro per il secondo

## Tabella dei contenuti: 
  1. [Requisiti](#Requisiti)
  2. [Comandi](#Comandi)
  3. [Lista file](#Lista-file)

## Requisiti:   
  - nel file [app.js](app.js) l'utente deve poter interagire con la calcolatrice
  - Al lancio, il programma mostra un messaggio di benvenuto e la lista delle operazioni supportate.
  - L’utente può selezionare l’operazione desiderata tra quelle disponibili.
  - In base all’operazione selezionata, il programma richiede l’inserimento dei parametri necessari per eseguire l’operazione.
  - Se l’utente inserisce un parametro invalido, il programma segnala l’errore e interrompe l’esecuzione.
  - Dopo che l’utente ha inserito i parametri corretti, il programma restituisce il risultato dell’operazione e termina l’esecuzione con un saluto.
  - I test nel file [calcolatrice.test.js](calcolatrice.test.js) non devono contenere errori e devono avere una coverage 100% 
     
## Comandi: 

- ### Comandi per l'installazione delle dipendenze: 

  * #### Clonazione del Repository Git:
   ```
    git clone https://github.com/tuousername/ssgs-calc.git
   ```  
  * #### Accesso alla cartella del Progetto:
    ```
    cd ssg-calc
    ```
     
  * #### Installazione di jest come dipendenza di sviluppo:
    ```
     npm install --save-dev jest
    ```

  * ### Installazione delle dipendenze: 
    ```
     npm install
    ```
- ### Comando per l'esecuzione dell'applicazione: 
    ```
    node app.js
    ```

- ### Comando per l'esecuzione dei test:
    ```
    npm test
    ```

- ### Comandi aggiuntivi utili:

  * #### Visualizzazione del contenuto della cartella corrente:
    ```
    ls
    ```
  
 * #### Uscire dalla cartella corrente:
    ```
     cd ..
    ``` 
  * #### Apertura del progetto in Visual Studio Code:
    ```
    code .
    ```

## Lista file: 
- File [calcolatrice.js](calcolatrice.js):
  Questo file presenta:
    * codice di tutte le possibili operazioni
    * codice di gestione degli errori di tutte le possibili operazioni (come la divisione per zero)
- File  [calcolatrice.test.js](calcolatrice.test.js):
  Questo file presenta:
    * test per testare il corretto funzionamento di ogni operazione della calcolatrice
- File [app.js](app.js):
  Questo file presenta:
    * codice di una possibile applicazione che va ad interagire ed eseguire le operazioni della calcolatrice


