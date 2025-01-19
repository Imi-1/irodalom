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
table.id="tableID"; //Id-t adok a tablenek
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

generateColgroup() //Függvény meghívása

createHeader() //Függvény meghívása

const tbody = document.createElement('tbody'); // Táblázat törzs részének létrehozása
tbody.id="tbodyID"; //Id-t adok a tbodynak
table.appendChild(tbody); // Törzs hozzáadása a táblázathoz

renderTable(array) //Függvény meghívása

generateForm()//Függvény meghívása

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

if(!validateFormInputFields(cell1HtmlElement, cell1Value, "Kötelező megadni a költő nevét!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(!validateFormInputFields(cell2HtmlElement, cell2Value, "Kötelező megadni a korszakot!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(!validateFormInputFields(cell3HtmlElement, cell3Value, "Kötelező megadni az első szerelmét!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(!validateFormInputFields(cell4HtmlElement, cell4Value, "Kötelező megadni a második szerelmét!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
  valid = false; // Amennyiben false volt a valid értékét false-ra állítja
};

if(valid){ //Ha a valid ture
  const newElement = { // Új objektumot hozunk létre az adatokkal
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

