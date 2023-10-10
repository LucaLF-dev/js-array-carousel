# Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
## MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
## MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
## MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
### BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
### BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


# Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


- Creo una varibile array con le immaggini
  - inserisco le immaggini nell' array
- creo uan variabile in cui richiamo un elemento dal DOM ('gallery')
- creo un ciclo for per inserire le immaggini nel DOM:
  - creo una variabile src 
  - creo una varibile htmlstring 'div' in cui inserirò la classe 'image' e la varibile 'src' all' interno della stringa
  - stampo nel dom la stringa prima creata
- richiamo dal DOM gli elementi con classe 'image'
- creo una variabile in cui do la classe 'active solo alla prima immagine

     

  