// from data.js the data is expressed as a list of dictionaries
var tableData = data;
console.log(tableData)
// Generate the table assigning every key to a column and one row per object: 
// The table has a thead (table-head) already given to us, containing a tr (table row) which in turn contains three th (table header):

// Generate the table head: 
// function generateUfoTableHead(table, proof) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     // Proof is  empty but will represent tableData object values:
//     for (let key of proof) {
//         // Create these 'th' elements manually and for each 'th' 
//         let th = d3.createElement("th");
//         // Obtain text from the key value let text = 'text'
//         let text = d3.createTextNode(key);
//         // 'th' to append [0] for header before calling the function
//         th.appendChild(text);
//         // Row will append 'th' the titles of columns
//         row.appendChild(th);
//       }
//   }
  
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
// Select the form
// var form = d3.select("#form");

// Create event handlers 
// form.on("submit",handleClick);

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField_Date = d3.select("#datetime");
var inputField_City = d3.select("#city");
var inputField_State = d3.select("#state");
var inputField_Country = d3.select("#country");
var inputField_Shape = d3.select("#shape");



// This function is triggered when the button is clicked
function handleClick() {
    console.log("Begin filter!");
      // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
  var inputDate = inputField_Date.property("value");
  var inputCity = inputField_City.property("value");
  var inputState = inputField_State.property("value");
  var inputCountry = inputField_Country.property("value");
  var inputShape = inputField_Shape.property("value");


  // var filteredDate = tableData.filter(data => data.datetime === inputValue); //point filter towards original data set.
  let filteredData = tableData; 
  if (inputDate) {
    filteredData = filteredData.filter(sighting =>sighting.datetime === inputDate);
  }
  if (inputCity) {
     filteredData = filteredData.filter(sighting => sighting.country === inputCity);
  }
  if (inputState) {
     filteredData= filteredData.filter(sighting => sighting.state === inputState);
  }
  if (inputCountry) {
    filteredData = filteredData.filter(sighting => sighting.city === inputCountry);
  }
  if (inputShape) {
    filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
  }

 //   Declare variables before calling the function: 
 let table = d3.select("tbody");
 //   The table head is the first row
  
  generateUfoData(table, filteredData);
}

// var filteredData = tableData.filter(sighting =>
//   {if(sighting.datetime === inputDate){return sighting.datetime;}
//   if(sighting.city === inputCity){return sighting.city;}
//   if(sighting.state === inputState){return sighting.state ;}
//   if(sighting.country === inputCountry){return sighting.country;}
//   if(sighting.shape === inputShape){return sighting.shape;}
// });

// First variation of my conditionals to filter my search: 
// var filteredData = tableData.filter(
//   sighting => sighting.datetime === inputDate ||
//   sighting.city === inputCity ||
//   sighting.state === inputState ||
//   sighting.country === inputCountry ||
//   sighting.shape === inputShape);

// This function will allow multiple search fields to filter data: 
// function multiSwitch(filter, field) {
//   switch(true) {
//     case filter && sighting.datetime === inputDate:
//       return field, sighting.datetime;
//     case filter && sighting.city === inputCity:
//       return field, sighting.city;
//     case filter && sighting.state === inputState:
//       return field, sighting.state;
//     case filter && sighting.country === inputCountry:
//       return field, sighting.country;
//     case filter && sighting.shape === inputShape:
//       return field, sighting.shape; 
//     default :
//       return field;              
// }};



// Test all invidual fields seperately: 

// function dateClick() {
//   console.log("Begin filter!");
//     // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target); 
//     var inputDate = inputField_Date.property("value");
//     var filteredDate = tableData.filter(data => data.city === inputCity);
// generateUfoData(table, filteredDate);
// }
// function cityClick() {
//   console.log("Begin filter!");
//     // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target); 
//     var inputCity = inputField_City.property("value");
//     var filteredCity = tableData.filter(data => data.city === inputCity);
// generateUfoData(table, filteredCity);
// }

// function stateClick() {
//   console.log("Begin filter!");
//     // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target); 
//    var inputState = inputField_State.property("value");
//    var filteredState = tableData.filter(data => data.state === inputState);
// generateUfoData(table, filteredState);
// }

// function countryClick() {
//   console.log("Begin filter!");
//     // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target); 
//    var inputCountry = inputField_Country.property("value");
//    var filteredCountry = tableData.filter(data => data.country === inputCountry);
// generateUfoData(table, filteredCountry);
// }

// function shapeClick() {
//   console.log("Begin filter!");
//     // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target); 
//   let shapes = shape
//     var inputShape = inputField_Shape.property("value");
//     var filteredShape = tableData.filter(data => data.shapes === inputShape);
// generateUfoData(table, filteredShape);
// }


// var elements = document.querySelectorAll("tr");
// for (let i = 0; i < elements.length; i++){
//   elements[i].style.color = "limegreen";
// }

// let colored_rows = ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark"];
// for (let i = 0; i < colored_rows.length; i++){
//   let color = colored_rows[i];
//   d3.select("tr").attr("class", color);
//   d3.selectAll("tr").attr("class", colored_rows[0]);
// }


// Create a funtion to append colored rows: 
  // <tr class="table-primary">...</tr>
  // <tr class="table-secondary">...</tr>
  // <tr class="table-success">...</tr>
  // <tr class="table-danger">...</tr>
  // <tr class="table-warning">...</tr>
  // <tr class="table-info">...</tr>
  // <tr class="table-light">...</tr>
  // // <tr class="table-dark">...</tr>
// this needs to go before click statement 
// tableRows = d3.selectAll("tr").attr("class", color)
// let colors = ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark"]
// n = 0
// tableRows.forEach(function(row) {
//    row.classed(color[n], true)
//    if (n > colors.length) {
//       n++
//    } else {
//       n = 0
//    };
// });

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
// button.on("click", dateClick);
// button.on("click", cityClick);
// button.on("click", stateClick);
// button.on("click", countryClick);
// button.on("click", shapeClick);
var elements = document.querySelectorAll("tr");
for (let i = 0; i < elements.length; i++){
  elements[i].style.color = "pink";
}
  
  let colored_rows = ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark"];
  for (let i = 0; i < colored_rows.length; i++){
    let color = colored_rows[i];
    d3.select("tr").attr("class", color);
    d3.selectAll("tr").attr("class", colored_rows[6]);
  }



