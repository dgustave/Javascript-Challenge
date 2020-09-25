// from data.js the data is expressed as a list of dictionaries
var tableData = data;
// Generate the table assigning every key to a column and one row per object: 
// The table has a thead (table-head) already given to us, containing a tr (table row) which in turn contains three th (table header):

// Generate the table head: 
function generateUfoTableHead(table, proof) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    // Proof is  empty but will represent tableData object values:
    for (let key of proof) {
        // Create these 'th' elements manually and for each 'th' 
        let th = d3.createElement("th");
        // Obtain text from the key value let text = 'text'
        let text = d3.createTextNode(key);
        // 'th' to append [0] for header before calling the function
        th.appendChild(text);
        // Row will append 'th' the titles of columns
        row.appendChild(th);
      }
  }
  
// Generate the table data by cell and rows through iteration: 
  function generateUfoData(table, proof) {
      table.html("") // Clear any existing data from the html.. 
    // Proof is  empty but will represent tableData object values:
    for (let element of proof) {
      let row = table.append("tr");
      for (key in element) {
        let cell = row.append("td");
        cell.text(element[key])

      }
    }
  }


//   Declare variables before calling the function: 
  let table = d3.select("tbody");
//   The table head is the first row
  let proof = Object.keys(tableData[0]);
  generateUfoData(table, tableData); // generate the table first
//   generateUfoTableHead(table, proof); // then the head

//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input:
// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("Begin filter!");
      // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
  var inputValue = inputField.property("value");
  var filteredData = tableData.filter(data => data.datetime === inputValue); //point filter towards original data set. 
  generateUfoData(table, filteredData);
}
// This is for the table text.
var elements = document.querySelectorAll("tr");
for (let i = 0; i < elements.length; i++){
  elements[i].style.color = "lightblue";
}


// Create a funtion to append colored rows: 
  // <tr class="table-primary">...</tr>
  // <tr class="table-secondary">...</tr>
  // <tr class="table-success">...</tr>
  // <tr class="table-danger">...</tr>
  // <tr class="table-warning">...</tr>
  // <tr class="table-info">...</tr>
  // <tr class="table-light">...</tr>
  // // <tr class="table-dark">...</tr>
let colored_rows = ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark"];
for (let i = 0; i < colored_rows.length; i++){
  let color = colored_rows[i];
  d3.select("tr").attr("class", color);
  d3.selectAll("tr").attr("class", colored_rows[6]);
}
// this needs to go before click statement ^^^^^^^^^^^


// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);



