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

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
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


