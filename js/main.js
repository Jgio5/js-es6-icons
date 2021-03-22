$(document).ready(function() {
// Milestone 1
// Partendo dalla struttura dati che troviamo sotto, mostriamo in pagina tutte le icone disponibili come da layout.

    //creo array icone
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }

    ];

     //creo array di colori
     const colors = [
        'blue',
        'orange',
        'purple'
    ];


    //evoco la funzione colorIcons (con la mia lista di icone e i miei colori)
    const coloredArray = colorIcons(icons, colors);

    const container = $('.icons');
    //funzione stampa icone nell'html (il mio array icone e container icone)
    printIcons(coloredArray, container);

    const select = $('#type');
    const types = getType(coloredArray);
    
    //aggiungo le options al nostro select
    printOptions(types, select);

    //Facciamo il bind fra select ed evento change
    select.change({container}, function (event) {
        const container = event.data.container;
        const optionSelected = $(this).val();

        const filtered = coloredArray.filter((item) => {
            return item.type === optionSelected;
        });
        printIcons(filtered, container);
    });

});

 /*FUNCTION*/

//funzione stampa icone e titoli
function printIcons(array, container) {
    //rimuovo tutti i figli del DOM -> ripulisco il container
    container.html('');

    //ciclo forEach di icons per trovare le info che ho definito
    array.forEach((info) => {
        //destracturing per ricavare le info che voglio
        const {color, family, name, prefix} = info;
    
        //template literal
        const elementHTML =`
        <div>
            <div class="box">
                <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                <div style="color: ${color}" class="title">${name.toUpperCase()}</div>
            </div>
        </div>
        `
        //inserisco l'elemento nell'HTML 
        container.append(elementHTML);
    });
}


//evoco la funzione che da un colore a ogni icona
function colorIcons(icons, colors) {
    const types = getType(icons);

    // const coloredArray = [];

    // for (let i = 0; i < icons.length; i++) {
    //     const icon = icons[i];
    //     const indexType = types.indexOf(icon.type);

    //     if(indexType !== -1) {
    //         icon.color = colors[indexType];
    //     }
    //     //aggiungo al mio array il colore
    //     coloredArray.push(icon);
    // }
    // return coloredArray;

    const coloredArray = icons.map((item) => {
        const indexType = types.indexOf(item.type);
        
        if (indexType !== -1) {
            item.color = colors[indexType];
        }
        return item;
    });
    return coloredArray;
}

//Funzione -> creo un array che si popola con il "type"
function getType(array) {
    
    const types = [];

    array.forEach((item) => {
        if (!types.includes(item.type)) {
            types.push(item.type);
        }
    });
    return types;
}

//Funzione select con opzioni
function printOptions(array, select) {
    array.forEach((item) => {
        select.append(`<option value="${item}">${item}</option`);
    });
}