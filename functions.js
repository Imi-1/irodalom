/**
 * Létrehozza a <colgroup> elemet a táblázathoz három oszloppal.
 * Az első és harmadik oszlopok "colored-column" osztályt kapnak.
 */
function generateColgroup(){  
    const colgroup = document.createElement('colgroup');  // Létrehozza a <colgroup> elemet
    table.appendChild(colgroup);  // Hozzáadja a <colgroup> elemet a táblázathoz
  
    for(let i = 0; i < 3; i++){  // Három oszlopot hoz létre a colgroup számára
        const col = document.createElement('col');  // Létrehozza a <col> elemet
  
        col.className = (i === 0 || i === 2) ? "colored-column" : "";  // A megfelelő indexeknél hozzáadja a "colored-column" osztályt
  
        colgroup.appendChild(col);  // Hozzáadja a <col> elemet a <colgroup> elemhez
    }
}
 
/**
 * Létrehozza a fejlécet a táblázathoz, és beállítja a megfelelő címeket.
 * A "Szerelmek" fejléc cella két oszlopot ölel át.
 */
function createHeader(array){  
    const table = document.getElementById("tableID")//Létrehozunk egy új változót, ami a tableID id-jú táblázatot (table) tárolja
    const thead = document.createElement('thead');  // Fejléc rész létrehozása
    table.appendChild(thead);  // Fejléc hozzáadása a táblázathoz

    const headerRow = document.createElement('tr');  // Fejléc sor létrehozása
    thead.appendChild(headerRow);  // Fejléc sor hozzáadása a fejléc részhez

    for(const i of Object.values(array)){  // Végigmegy az array első objektumán ami tartalmazza a fejléc elemeit. Az Object.values() egy beépített metódus, amely egy objektum összes értékéből tömböt készít. Itt azért hasznos mert egy összetett tömbbön nem lehet végigiterálni az objektumok értékén, ezért kell egy sima tömb.
        const headerCell = document.createElement('th');  // Létrehozom a cellát a fejlécben
        headerCell.innerHTML = i;  // Beállítom a cella szövegét a tömb segítségével

        if(i==="Szerelmek"){  //Ha a szerelmekhez ér 
            headerCell.colSpan="2";  // A cella colspant kap
        }

        headerRow.appendChild(headerCell);  // Hozzáadom a cellát a fejléc sorához
    }
}

/**
 * Rendereli a táblázat adatokat, egyesével hozzáadja azokat a megfelelő cellákba.
 * Ellenőrzi, hogy a 4. cella van-e és hozzáadja azt is.
 * 
 * @param {Array} array - A táblázat adatait tartalmazó tömb.
 */
function renderTable(array){  
    for (let i = 1; i < array.length; i++) {  // Iterálunk végig az array elemein
        const row = document.createElement('tr');  // Létrehozunk egy új sort
        const tbody = document.getElementById("tbodyID") // Létrehozunk egy új változót, ami a tbodyID id-jú táblázat testet (tbody) tárolja
        tbody.appendChild(row);  // Hozzáadjuk az új sort a tbody-hoz

        const cell1 = document.createElement('td');  // Létrehozunk egy új cellát az első oszlophoz
        cell1.innerHTML = array[i].cell1;  // Beállítjuk a cella tartalmát az array[i].cell1 értékére
        row.appendChild(cell1);  // Hozzáadjuk az első cellát a sorhoz

        const cell2 = document.createElement('td');  // Létrehozunk egy új cellát a második oszlophoz
        cell2.innerHTML = array[i].cell2;  // Beállítjuk a cella tartalmát az array[i].cell2 értékére
        row.appendChild(cell2);  // Hozzáadjuk a második cellát a sorhoz

        const cell3 = document.createElement('td');  // Létrehozunk egy új cellát a harmadik oszlophoz
        cell3.innerHTML = array[i].cell3;  // Beállítjuk a cella tartalmát az array[i].cell3 értékére
        cell3.colSpan = "2";  // Colspant adunk a cell3-nak
        row.appendChild(cell3);  // Hozzáadjuk a harmadik cellát a sorhoz
        
        if (array[i].cell4 !== undefined){  // Megnézzük, hogy a cell4 undefined-e
            cell3.colSpan = "1";  // Levesszük a colspant
            const cell4 = document.createElement('td');  // Létrehozunk egy új cellát a negyedik oszlophoz
            cell4.innerHTML = array[i].cell4;  // Beállítjuk a cella tartalmát az array[i].cell4 értékére
            row.appendChild(cell4);  // Hozzáadjuk a negyedik cellát a sorhoz
        }
    }
}

/**
 * Ellenőrzi az űrlap mezőinek érvényességét, ha a mező üres, hibaüzenetet jelenít meg.
 * 
 * @param {HTMLElement} inputElement - Az input mező, amelyet ellenőrizni kell.
 * @param {string} inputValue - Az input mező értéke.
 * @param {string} errormessage - A hibaüzenet, amely akkor jelenik meg, ha a mező üres.
 * @returns {boolean} - Igaz, ha minden mező érvényes, hamis, ha nem.
 */
function validateFormInputFields(inputElement, inputValue, errormessage){  
    let validation = true;  // Kezdőértékként igazra állítjuk a validációs változót
    if(inputValue === ""){  // Ellenőrizzük, hogy az input mező üres-e
        const parentElement = inputElement.parentElement;  // Megkeressük az input mező szülőelemét
        const error = parentElement.querySelector('.error');  // Hibát keresünk a szülőelemben
        error.innerHTML = errormessage;  // Beállítjuk a hibaüzenetet
        validation = false;  // Hamisra állítjuk a validációs változót
    }
    return validation;  // Visszaadjuk az érvényességi állapotot
}

/**
 * Létrehozza az űrlapot és hozzáadja azt az oldalhoz.
 */
function generateForm() {  // Függvény létrehozása, amely létrehozza és hozzáadja az űrlapot az oldalhoz

    const form = document.createElement('form'); // Létrehoz egy új <form> elemet
    form.id = 'form'; // Beállítja a form ID-jét, hogy később könnyen hivatkozhassunk rá
    form.action = '#'; // Beállítja az űrlap action attribútumát, amely azt jelzi, hogy hová küldjük el az adatokat (itt a # azt jelzi, hogy nem küldjük el)
  
    const fields = [ // Az űrlap mezőinek adatstruktúrája: minden mező egy objektum, amely tartalmazza a címkét (label), az id-t és a nevét (name)
      { 
          label: 'Költő neve:',            // A mező a költő nevét tárolja
          id: 'kolto_nev',                 // A mező egyedi azonosítója
          name: 'kolto_nev'                // A mező neve, amit a kód használ
      },  
      
      { 
          label: 'Korszak:',               // A költő korszakának megnevezése
          id: 'korszak',                   // A mező egyedi azonosítója
          name: 'korszak'                  // A mező neve, amit a kód használ
      },  
      
      { 
          label: 'Szerelme:',              // A költő szerelmének neve
          id: 'szerelem1',                 // A mező egyedi azonosítója
          name: 'szerelem1'                // A mező neve, amit a kód használ
      },  
      
      { 
          label: 'Volt másik szerelme?',   // Ellenőrző mező, hogy volt-e másik szerelme
          id: 'masodik',                   // A mező egyedi azonosítója
          name: 'masodik',                 // A mező neve, amit a kód használ
          type: 'checkbox'                 // Checkbox mező a logikai értékhez
      },  
      
      { 
          label: 'Szerelme:',              // A költő második szerelmének neve
          id: 'szerelem2',                 // A mező egyedi azonosítója
          name: 'szerelem2'                // A mező neve, amit a kód használ
      }
    ];
  
    // Iterálunk a fields tömb minden egyes elemén (mezőjén)
    for (const i of fields) {
        const fieldDiv = document.createElement('div'); // Létrehoz egy új <div> elemet, amely tartalmazza a mezőt
        fieldDiv.className = 'field'; // Beállítja a div osztályát, hogy stílusokat rendeljen hozzá
  
        const label = document.createElement('label'); // Létrehoz egy <label> elemet
        label.htmlFor = i.id; // A label-t összekapcsolja az input mezővel az id alapján
        label.textContent = i.label; // A label szövegét beállítja
        fieldDiv.appendChild(label); // A label-t hozzáadja a mező div-hez
  
        fieldDiv.appendChild(document.createElement('br')); // Sortörést ad hozzá a div-hez, hogy ne legyenek egy sorban az elemek
  
        const input = document.createElement('input'); // Létrehoz egy új <input> elemet
        input.type = i.type || 'text'; // Beállítja az input típusát (alapértelmezett típus 'text', de ha checkbox, akkor checkbox)
        input.id = i.id; // Beállítja az input id-ját
        input.name = i.name; // Beállítja az input nevét
        fieldDiv.appendChild(input); // Hozzáadja az input mezőt a div-hez
  
        fieldDiv.appendChild(document.createElement('br')); // Sortörést ad hozzá az input mező után
        fieldDiv.appendChild(document.createElement('br')); // Még egy sortörést, hogy jól nézzen ki
  
        const errorDiv = document.createElement('div'); // Létrehoz egy új div-et, amely tárolni fogja a hibaüzeneteket
        errorDiv.className = 'error'; // Hozzáadja a hibaosztályt, hogy stílusozni lehessen
        fieldDiv.appendChild(errorDiv); // Hozzáadja a hibadiv-et a mező div-hez
  
        form.appendChild(fieldDiv); // Hozzáadja a mezőt tartalmazó div-et az űrlaphoz
    }
  
    const button = document.createElement('button'); // Létrehoz egy új gombot
    button.type = 'submit'; // Beállítja a gomb típusát 'submit'-ra, hogy elküldje az űrlapot
    button.textContent = 'Hozzáadás'; // Beállítja a gomb szövegét
    form.appendChild(button); // Hozzáadja a gombot az űrlaphoz
  
    document.body.appendChild(form); // Hozzáadja a formot a dokumentum body-jához, így az megjelenik az oldalon
  }
