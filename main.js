// A táblázat elemeinek létrehozása során a változók mindig a megfelelő HTML elemet veszik fel, például az oszlopok a col-t.

const header1Text = "Szerző neve"; // Fejléc szövege
const header2Text = "Korszak"; // Fejléc szövege
const header3Text = "Szerelmek"; // Fejléc szövege

const row1Cell1Text = "Balassi Bálint"; // Első cella szövege az első sorban
const row1Cell2Text = "reformáció"; // Második cella szövege az első sorban
const row1Cell3Text = "Losonczy Anna"; // Harmadik cella szövege az első sorban
const row1Cell4Text = "Dobó Krisztina"; // Negyedik cella szövege az első sorban

// Második sor celláinak szövegei
const row2Cell1Text = "Csokonai Vitéz Mihály"; // Első cella szövege a második sorban
const row2Cell2Text = "felvilágosodás"; // Második cella szövege a második sorban
const row2Cell3Text = "Vajda Juliána"; // Harmadik cella szövege a második sorban

// Harmadik sor celláinak szövegei
const row3Cell1Text = "Petőfi Sándor"; // Első cella szövege a harmadik sorban
const row3Cell2Text = "magyar romantika"; // Második cella szövege a harmadik sorban
const row3Cell3Text = "Mednyánszky Berta"; // Harmadik cella szövege a harmadik sorban
const row3Cell4Text = "Szendrey Júlia"; // Negyedik cella szövege a harmadik sorban

// Negyedik sor celláinak szövegei
const row4Cell1Text = "Ady Endre"; // Első cella szövege a negyedik sorban
const row4Cell2Text = "20. század"; // Második cella szövege a negyedik sorban
const row4Cell3Text = "Léda"; // Harmadik cella szövege a negyedik sorban
const row4Cell4Text = "Csinszka"; // Negyedik cella szövege a negyedik sorban



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
headerCell1.innerHTML = header1Text; // Szöveg beállítása az első cellában
headerRow.appendChild(headerCell1); // Első fejléc cella hozzáadása a fejléc sorhoz

const headerCell2 = document.createElement('th'); // Második fejléc cella létrehozása
headerCell2.innerHTML = header2Text; // Szöveg beállítása a második cellában
headerRow.appendChild(headerCell2); // Második fejléc cella hozzáadása a fejléc sorhoz

const headerCell3 = document.createElement('th'); // Harmadik fejléc cella létrehozása
headerCell3.colSpan = 2; // Cella oszlopainak összevonása
headerCell3.innerHTML = header3Text; // Szöveg beállítása a harmadik cellában
headerRow.appendChild(headerCell3); // Harmadik fejléc cella hozzáadása a fejléc sorhoz




const tbody = document.createElement('tbody'); // Táblázat törzs részének létrehozása
table.appendChild(tbody); // Törzs hozzáadása a táblázathoz

const row1 = document.createElement('tr'); // Első sor létrehozása
tbody.appendChild(row1); // Első sor hozzáadása a táblázat törzséhez

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorban
row1Cell1.innerHTML = row1Cell1Text; // Szöveg beállítása az első cellában
row1.appendChild(row1Cell1); // Első cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorban
row1Cell2.innerHTML = row1Cell2Text; // Szöveg beállítása a második cellában
row1.appendChild(row1Cell2); // Második cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
row1Cell3.innerHTML = row1Cell3Text; // Szöveg beállítása a harmadik cellában
row1.appendChild(row1Cell3); // Harmadik cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedik cella létrehozása az első sorban
row1Cell4.innerHTML = row1Cell4Text; // Szöveg beállítása a negyedik cellában
row1.appendChild(row1Cell4); // Negyedik cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tbody.appendChild(row2); // Második sor hozzáadása a táblázat törzséhez

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorban
row2Cell1.innerHTML = row2Cell1Text; // Szöveg beállítása az első cellában
row2.appendChild(row2Cell1); // Első cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorban
row2Cell2.innerHTML = row2Cell2Text; // Szöveg beállítása a második cellában
row2.appendChild(row2Cell2); // Második cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
row2Cell3.colSpan = 2; // Harmadik cella oszlopainak összevonása
row2Cell3.innerHTML = row2Cell3Text; // Szöveg beállítása a harmadik cellában
row2.appendChild(row2Cell3); // Harmadik cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tbody.appendChild(row3); // Harmadik sor hozzáadása a táblázat törzséhez

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorban
row3Cell1.innerHTML = row3Cell1Text; // Szöveg beállítása az első cellában
row3.appendChild(row3Cell1); // Első cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorban
row3Cell2.innerHTML = row3Cell2Text; // Szöveg beállítása a második cellában
row3.appendChild(row3Cell2); // Második cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
row3Cell3.innerHTML = row3Cell3Text; // Szöveg beállítása a harmadik cellában
row3.appendChild(row3Cell3); // Harmadik cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorban
row3Cell4.innerHTML = row3Cell4Text; // Szöveg beállítása a negyedik cellában
row3.appendChild(row3Cell4); // Negyedik cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tbody.appendChild(row4); // Negyedik sor hozzáadása a táblázat törzséhez

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorban
row4Cell1.innerHTML = row4Cell1Text; // Szöveg beállítása az első cellában
row4.appendChild(row4Cell1); // Első cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
row4Cell2.innerHTML = row4Cell2Text; // Szöveg beállítása a második cellában
row4.appendChild(row4Cell2); // Második cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorban
row4Cell3.innerHTML = row4Cell3Text; // Szöveg beállítása a harmadik cellában
row4.appendChild(row4Cell3); // Harmadik cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorban
row4Cell4.innerHTML = row4Cell4Text; // Szöveg beállítása a negyedik cellában
row4.appendChild(row4Cell4); // Negyedik cella hozzáadása a negyedik sorhoz