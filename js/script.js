// Verifica 

console.log('JS OK');

// Steps

// Collega un paragrafo per stampare il risultato 

const travelerName = document.getElementById('name-display');

const distance = document.getElementById('km-display');

const age = document.getElementById('age-display');

const result = document.getElementById('price-display');

const button = document.querySelector('button');

// Crea le variabili da calcolare una volta premuto il bottone

let fullName
let travelDistance
let userAge

// Quando premi il bottone

button.addEventListener ('click', function(){

// Chiedi all'utente il nome

fullName = document.getElementById('full-name').value;
    console.log(fullName);
    
    // Chiedi all'utente il numero di chilometri
    
    travelDistance = parseInt(document.getElementById('travel-length').value);
    console.log(travelDistance);
    
    // Chiedi all'utente l'età del passeggero
    
    userAge = document.getElementById('age-range').value;
    console.log(userAge);
    
    
    // Convalida i dati inseriti:
    
    let isValid = true;
    let message = '';
    

        if (isNaN(travelDistance) == true || travelDistance < 1) {
            message ='Inserire un numero per la distanza maggiore di 1. ';
            isValid = false;
        }
        
        if (!fullName) {
            message = 'Inserire un nome valido';
            isValid = false;
        }
        
        // Se i dati richiesti sono corretti:
        
        if (isValid) {

        travelerName.innerHTML = `Nome del viaggiatore: <strong>${fullName}</strong>.`
            
        distance.innerHTML = `Vuoi viaggiare per: <strong>${travelDistance}km</strong>.`
    
        age.innerHTML = `Dichiari di far parte della fascia <strong>${userAge}</strong>.`
        
        // Crea una variabile che definisca il prezzo intero e una per i possibili sconti
        
        let fullPrice = (travelDistance * 0.21).toFixed(2);
        console.log(fullPrice);
        
        let salePrice
        
        // Crea le condizioni per eventuali sconti
        
        if (userAge === 'minorenne') {
            salePrice = (fullPrice * 0.8).toFixed(2);
            result.innerHTML = `Il prezzo da pagare è: <del>${fullPrice}</del> <strong>${salePrice}&euro;</strong><p>I minori di 18 anni hanno diritto ad un 20% di sconto!</p>`
        }
        
        else if (userAge === 'anziano') {
            salePrice = (fullPrice * 0.6).toFixed(2);
            result.innerHTML = `Il prezzo da pagare è: <del>${fullPrice}</del> <strong>${salePrice}&euro;</strong><p>Superati i 65 anni si ha diritto ad un 40% di sconto!</p>`
        }
    
        else {
    
            result.innerHTML = `Il prezzo da pagare è: <strong>${fullPrice}&euro;</strong>`;
        }
    
        
        
    }
    
    else {
        result.innerHTML = message;
    }
})
    
    
    
    