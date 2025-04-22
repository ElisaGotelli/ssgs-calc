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
3. [Struttura dei file](#Struttura-dei-file)

## Requisiti:   
- L’interazione con l’utente avviene tramite terminale, nel file [app.js](app.js).
- Al lancio, il programma mostra:
     * Un messaggio di benvenuto
     * L'elenco delle operazioni supportate.
- L’utente può selezionare l’operazione desiderata tra quelle disponibili.
- In base all’operazione selezionata, il programma richiede l’inserimento dei parametri necessari per eseguire l’operazione.
- Se l’utente inserisce un parametro invalido, il programma segnala l’errore non interrompendo l'esecuzione
- Dopo che l’utente ha inserito i parametri corretti, il programma restituisce il risultato e chiede se l'utente desidera continuare ad usare l'applicazione
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

## Struttura dei file: 
- ### [calcolatrice.js](calcolatrice.js):
Contiene: 
    * codice di tutte le possibili operazioni
    * codice di gestione degli errori di tutte le possibili operazioni (come la divisione per zero)
-### [calcolatrice.test.js](calcolatrice.test.js):
Contiene: 
    * test per testare il corretto funzionamento di ogni operazione della calcolatrice
- ### [app.js](app.js):
Contiene: 
    * codice di una possibile applicazione che va ad interagire ed eseguire le operazioni della calcolatrice


