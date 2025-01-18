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

const row1 = document.createElement('tr'); // Első sor létrehozása
tbody.appendChild(row1); // Első sor hozzáadása a táblázat törzséhez

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorban
row1Cell1.innerHTML = array[1].cell1; // Szöveg beállítása az első cellában
row1.appendChild(row1Cell1); // Első cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorban
row1Cell2.innerHTML = array[1].cell2; // Szöveg beállítása a második cellában
row1.appendChild(row1Cell2); // Második cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
row1Cell3.innerHTML = array[1].cell3; // Szöveg beállítása a harmadik cellában
row1.appendChild(row1Cell3); // Harmadik cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedik cella létrehozása az első sorban
row1Cell4.innerHTML = array[1].cell4; // Szöveg beállítása a negyedik cellában
row1.appendChild(row1Cell4); // Negyedik cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tbody.appendChild(row2); // Második sor hozzáadása a táblázat törzséhez

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorban
row2Cell1.innerHTML = array[2].cell1; // Szöveg beállítása az első cellában
row2.appendChild(row2Cell1); // Első cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorban
row2Cell2.innerHTML = array[2].cell2; // Szöveg beállítása a második cellában
row2.appendChild(row2Cell2); // Második cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
row2Cell3.colSpan = 2; // Harmadik cella oszlopainak összevonása
row2Cell3.innerHTML = array[2].cell3; // Szöveg beállítása a harmadik cellában
row2.appendChild(row2Cell3); // Harmadik cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tbody.appendChild(row3); // Harmadik sor hozzáadása a táblázat törzséhez

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorban
row3Cell1.innerHTML = array[3].cell1; // Szöveg beállítása az első cellában
row3.appendChild(row3Cell1); // Első cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorban
row3Cell2.innerHTML = array[3].cell2; // Szöveg beállítása a második cellában
row3.appendChild(row3Cell2); // Második cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
row3Cell3.innerHTML = array[3].cell3; // Szöveg beállítása a harmadik cellában
row3.appendChild(row3Cell3); // Harmadik cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorban
row3Cell4.innerHTML = array[3].cell4; // Szöveg beállítása a negyedik cellában
row3.appendChild(row3Cell4); // Negyedik cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tbody.appendChild(row4); // Negyedik sor hozzáadása a táblázat törzséhez

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorban
row4Cell1.innerHTML = array[4].cell1; // Szöveg beállítása az első cellában
row4.appendChild(row4Cell1); // Első cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
row4Cell2.innerHTML = array[4].cell2; // Szöveg beállítása a második cellában
row4.appendChild(row4Cell2); // Második cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorban
row4Cell3.innerHTML = array[4].cell3; // Szöveg beállítása a harmadik cellában
row4.appendChild(row4Cell3); // Harmadik cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorban
row4Cell4.innerHTML = array[4].cell4; // Szöveg beállítása a negyedik cellában
row4.appendChild(row4Cell4); // Negyedik cella hozzáadása a negyedik sorhoz
