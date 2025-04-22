# PROGETTO CALCOLATRICE 🔢
Applicazione semplice e veloce sviluppata con Node.js per fare cinque tipi di operazione: 
  - Somma
  - Sottrazione
  - Moltiplicazione
  - Divisione
  - Elevamento a potenza 

## Tabella dei contenuti: 
  1. [Prerequisiti](#Prerequisiti)
  2. [Comandi](#Comandi-Jest)
  3. [Operazioni](#Operazioni)
  4. [Lista file](#Lista-file)
     
## Comandi: 

- ###Comandi per l'installazione delle dipendenze: 

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
Sono stati creati diversi file, in cui:
  - Nel file *calcolatrice.js* è indicato il codice di tutte le possibili operazioni con anche la gestione degli eventuali errori (come la divisione per zero)
  - Nel file  *calcolatrice.test.js* sono indicati diversi test per testare il corretto funzionamento della calcolatrice e dare una coverage del 100%
  - Nel file *app.js* è indicato il codice di una possibile applicazione che va ad interagire ed eseguire le operazioni della calcolatrice

## Requisiti:   
  - nel file *app.js* l'utente deve poter interagire con la calcolatrice
  - Al lancio, il programma mostra un messaggio di benvenuto e la lista delle operazioni supportate.
  - L’utente può selezionare l’operazione desiderata tra quelle disponibili.
  - In base all’operazione selezionata, il programma richiede l’inserimento dei parametri necessari per eseguire l’operazione.
  - Se l’utente inserisce un parametro invalido, il programma segnala l’errore e interrompe l’esecuzione.
  - Dopo che l’utente ha inserito i parametri corretti, il programma restituisce il risultato dell’operazione e termina l’esecuzione con un saluto.
  - I test nel file *calcolatrice.test.js* non devono contenere errori e devono avere una coverage 100%
