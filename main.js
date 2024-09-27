const tableData = [
  {
    id: 1,
    fname: "Princess",
    lname: "Uju",
    matno: "csc67556",
    gender: "Female",
    dept: "Computer Science",
  },
  {
    id: 2,
    fname: "Boss",
    lname: "Amiya",
    matno: "mat67890",
    gender: "Male",
    dept: "Mathematics",
  },
  {
    id: 3,
    fname: "Ademmy",
    lname: "Alice",
    matno: "cs567890",
    gender: "Female",
    dept: "Computer Science",
  },
];
localStorage.setItem('tableData', JSON.stringify(tableData));
const storageData = JSON.parse(localStorage.getItem('tableData'));
const table = document.getElementById("tableBody");

function mapTableData() {
    storageData.forEach((row) => {
    const tRow = document.createElement("tr");
    Object.values(row).forEach((value) => {
      const tCell = document.createElement("td");
      tCell.textContent = value;
      tRow.appendChild(tCell);
    });
    table.appendChild(tRow);
  });
}
mapTableData();

const button = document.getElementById("insertionButton")
button.addEventListener('click', insertTableData);
function insertTableData() {
    const tRow = document.createElement("tr");
    Object.values([storageData.length++, 'Phil','Val', 'phy27632','Male','Maths']).forEach((value)=>{
        const tCell = document.createElement('td')
        tCell.textContent = value
        tRow.appendChild(tCell)
    })
    table.appendChild(tRow);
}
