// A táblázat elemeinek létrehozása során a változók mindig a megfelelő HTML elemet veszik fel, például az oszlopok a col-t.

const array = [
    {
      cell1: "Szerző neve", // Fejléc: Szerző neve
      cell2: "Korszak",     // Fejléc: Korszak
      cell3: "Szerelmek"    // Fejléc: Szerelmek
    },
    {
      cell1: "Balassi Bálint", // Az első sor: Szerző neve
      cell2: "reformáció",     // Az első sor: Korszak
      cell3: "Losonczy Anna",  // Az első sor: Első szerelem
      cell4: "Dobó Krisztina"  // Az első sor: Második szerelem
    },
    {
      cell1: "Csokonai Vitéz Mihály", // A második sor: Szerző neve
      cell2: "felvilágosodás",        // A második sor: Korszak
      cell3: "Vajda Juliána"          // A második sor: Első szerelem (összevont oszlop)
    },
    {
      cell1: "Petőfi Sándor",      // A harmadik sor: Szerző neve
      cell2: "magyar romantika",   // A harmadik sor: Korszak
      cell3: "Mednyánszky Berta",  // A harmadik sor: Első szerelem
      cell4: "Szendrey Júlia"      // A harmadik sor: Második szerelem
    },
    {
      cell1: "Ady Endre",    // A negyedik sor: Szerző neve
      cell2: "20. század",   // A negyedik sor: Korszak
      cell3: "Léda",         // A negyedik sor: Első szerelem
      cell4: "Csinszka"      // A negyedik sor: Második szerelem
    }
  ];
  

const table = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez



const colgroup = document.createElement('colgroup'); // Oszlopcsoport létrehozása
table.appendChild(colgroup); // Oszlopcsoport hozzáadása a táblázathoz

const col1 = document.createElement('col'); // Első oszlop létrehozása
col1.className = "colored-column"; // Színezett oszlop osztályának beállítása
colgroup.appendChild(col1); // Első oszlop hozzáadása az oszlopcsoporthoz

const col2 = document.createElement('col'); // Második oszlop létrehozása
colgroup.appendChild(col2); // Második oszlop hozzáadása az oszlopcsoporthoz

const col3 = document.createElement('col'); // Harmadik oszlop létrehozása
col3.className = "colored-column"; // Színezett oszlop osztályának beállítása
colgroup.appendChild(col3); // Harmadik oszlop hozzáadása az oszlopcsoporthoz




const thead = document.createElement('thead'); // Fejléc rész létrehozása
table.appendChild(thead); // Fejléc hozzáadása a táblázathoz

const headerRow = document.createElement('tr'); // Fejléc sor létrehozása
thead.appendChild(headerRow); // Fejléc sor hozzáadása a fejléc részhez

const headerCell1 = document.createElement('th'); // Első fejléc cella létrehozása
headerCell1.innerHTML = array[0].cell1; // Szöveg beállítása az első cellában
headerRow.appendChild(headerCell1); // Első fejléc cella hozzáadása a fejléc sorhoz

const headerCell2 = document.createElement('th'); // Második fejléc cella létrehozása
headerCell2.innerHTML = array[0].cell2; // Szöveg beállítása a második cellában
headerRow.appendChild(headerCell2); // Második fejléc cella hozzáadása a fejléc sorhoz

const headerCell3 = document.createElement('th'); // Harmadik fejléc cella létrehozása
headerCell3.colSpan = 2; // Cella oszlopainak összevonása
headerCell3.innerHTML = array[0].cell3; // Szöveg beállítása a harmadik cellában
headerRow.appendChild(headerCell3); // Harmadik fejléc cella hozzáadása a fejléc sorhoz


const tbody = document.createElement('tbody'); // Táblázat törzs részének létrehozása
table.appendChild(tbody); // Törzs hozzáadása a táblázathoz

function renderTable(){ //Függvény létrehozása
    for (let i = 1; i < array.length; i++) { // Iterálunk végig az array elemein
        const row = document.createElement('tr'); // Létrehozunk egy új sort
        tbody.appendChild(row); // Hozzáadjuk az új sort a tbody-hoz
    
        const cell1 = document.createElement('td'); // Létrehozunk egy új cellát az első oszlophoz
        cell1.innerHTML = array[i].cell1; // Beállítjuk a cella tartalmát az array[i].cell1 értékére
        row.appendChild(cell1); // Hozzáadjuk az első cellát a sorhoz
    
        const cell2 = document.createElement('td'); // Létrehozunk egy új cellát a második oszlophoz
        cell2.innerHTML = array[i].cell2; // Beállítjuk a cella tartalmát az array[i].cell2 értékére
        row.appendChild(cell2); // Hozzáadjuk a második cellát a sorhoz
    
        const cell3 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
        cell3.innerHTML = array[i].cell3; // Beállítjuk a cella tartalmát az array[i].cell3 értékére
        cell3.colSpan = "2"; // Colspant adunk a cell3-nak
        row.appendChild(cell3); // Hozzáadjuk a harmadik cellát a sorhoz
        
    
        if (array[i].cell4 !== undefined){ // Megnézzük, hogy a cell4 undefiened e
    
            cell3.colSpan = "1"; // Levesszük a colspant
    
            const cell4 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cell4.innerHTML = array[i].cell4; // Beállítjuk a cella tartalmát az array[i].cell3 értékére
            row.appendChild(cell4); // Hozzáadjuk a negyedik cellát a sorhoz
    
        }
    }
}

renderTable() //Függvény meghívása


const form = document.getElementById('form'); // A form elemet kérjük le az ID alapján
form.addEventListener('submit', function(e) { // Eseményfigyelőt adunk a submit eseményre
  e.preventDefault(); // Megakadályozzuk az alapértelmezett form beküldését

  const thisForm = e.currentTarget; // Az esemény által kiváltott formot eltároljuk egy változóban.
  const errorElements = thisForm.querySelectorAll('.error'); // Lekérjük az összes elemet, amely rendelkezik "error" osztállyal.
  for (const i of errorElements) { // Iterálunk az "error" osztályú elemek felett.
      i.innerHTML = ""; // Kitöröljük ezek tartalmát.
  }
  let valid = true; // Kezdőértékként igazra állítjuk a validációs változót.

  const cell1HtmlElement = document.getElementById('kolto_nev'); // Költő nevének input mezője
  const cell2HtmlElement = document.getElementById('korszak'); // Korszak input mezője
  const cell3HtmlElement = document.getElementById('szerelem1'); // Első szerelem input mezője
  const cell4CheckboxElement = document.getElementById('masodik'); // Második szerelem checkbox
  const cell4HtmlElement = document.getElementById('szerelem2'); // Második szerelem input mezője

  const cell1Value = cell1HtmlElement.value; // Költő nevének értéke
  const cell2Value = cell2HtmlElement.value; // Korszak értéke
  const cell3Value = cell3HtmlElement.value; // Első szerelem értéke
  const cell4Value = cell4CheckboxElement.checked ? cell4HtmlElement.value : undefined; // Második szerelem csak akkor, ha a checkbox be van jelölve

if(!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a költő nevét!")){ //Megnézi, hogy a validateFormInputFields false-e
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(!validateFormInputFields(cell2HtmlElement, "Kötelező megadni a korszakot!")){ //Megnézi, hogy a validateFormInputFields false-e
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az első szerelmét!")){ //Megnézi, hogy a validateFormInputFields false-e
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(valid){
  const newElement = {
    cell1: cell1Value, // Költő neve
    cell2: cell2Value, // Korszak
    cell3: cell3Value, // Első szerelem
    cell4: cell4Value // Második szerelem
  }

  array.push(newElement); // Új objektum hozzáadása az array-hez
  tbody.innerHTML = ''; // Táblázat tartalmának törlése
  renderTable(); // Táblázat újrarenderelése
  thisForm.reset(); // A form mezőinek alaphelyzetbe állítása
}

  
});

function validateFormInputFields(inputElement, errormessage){ // Függvény létrehozésa két bemeneti értékkel
  let validation = true; // Kezdőértékként igazra állítjuk a validációs változót
  if(inputElement.value === ""){ // Ellenőrizzük, hogy az uralkodó input mezője üres-e
      const parentElement = inputElement.parentElement; // Megkeressük az évszám input mezőjének szülőelemét
      const error = parentElement.querySelector('.error'); // Az évszám mező szülőelemében keresünk egy "error" osztályú elemet
      error.innerHTML = errormessage; // Beállítjuk a hibaüzenetet
      validation = false; // A valid változó értékét hamisra állítjuk
  }
  return validation;  //Vissaztér a validation értékével, ami igaz vagy hamis lehet
}