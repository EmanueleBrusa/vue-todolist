Descrizione:
Rifare l'esercizio della to do list visto a lezione. Create un array di oggetti ( con proprietà text e done )che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.
BONUS
Aggiungete la funzionalità di edit della task

1 Realizzo il markup statico della todolist

2 Realizzo la parte logica della todolist
    2.1 Creo la struttura dati che devo mostrare: array di oggetti composti da text e done come attributi
    2.2 Realizzo il V-for nel dom per mostrare gli elementi dell'array
    2.3 Implemento nel dome l'attributo done degli oggetti dell'array per differenziare i task fatti da quelli non fatti 
    2.4 Realizzare il metodo per cambiare stato ad un task 
        2.4.1 Realizzo graficamente il pulsante 
        2.4.2 Creo un metodo che cambia lo stato del pulsante 
        2.4.3 Implemento l'esecuzione del metodo al click sul pulsante 
        2.4.4 Implemento il cambio di grafica sul pulsante 
    2.5 Realizzo il metodo che cancella il task 
        2.5.1 realizzo il metodo nel file script che deve accettare l'indice dell'elemento cliccato
        2.5.2 Con l'indice dell'elemento cliccato vado a rimuovere l'elemento con il metodo splice 
        2.5.3 aggiungere l'evento @click sul pulsante di cancellazione 
    2.6 aggiungo un elemento all'array
        2.6.1 realizzo il metodo che prende la variabile del data predisposta al conenimento di quello che scriviamo nell'input 
        2.6.2 all'interno del merodo realizzo un oggetto con la proprietà text valorizzata con il contenuto della variabile precedente e con done settato a false 
        2.6.3 Aggiungo l'oggetto nell'array e svuoto la variabile del testo 
        2.6.4 nell'input devo mettere il v-model con il nome della variabile 
    2.7 Realizzo la modifica del task 
        2.7.1 cambio la struttura degli oggetti aggiungendo la proprietà edit_enabled 
        2.7.2 realizzo un metodo che fa la medesima cosa di quanto fatto nel punto 2.4 con la proprietà edit_enabled settata a false 
        2.7.3 realizzo due div che appaiono a seconda del valore della proprietà edit_enabled
        2.7.4 se il valore della proprietà edit_enabled è true mostro un campo di input v-model settato alla proprietà text dell'oggetto cliccato
        2.7.5 altrimenti mostro semplicemente il testo del task 