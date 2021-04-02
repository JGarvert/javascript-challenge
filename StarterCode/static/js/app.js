// from data.js, set variable table to the data table
var tableData = data;

// Use D3 to select object in the HTML code.

var output = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var date_crit = d3.select("#datetime");

// Retrieve keys
var key_list = Object.keys(tableData[0])
//console.log(key_list);

// Fill HTML table with data.
var input_data = (data_source ) => {
    data_source.forEach(sighting => {
        var next_row = output.append("tr");
        key_list.forEach(key => {
            next_row.append("td").text(sighting[key]);
        });

    });

}
input_data(tableData);

// On listner event on button
filter_button.on("click", function() {
    d3.event.preventDefault();

    var entered_date = date_crit.property("value").trim();
    // if this was production - enter code to modify entered date and force it to fit within the actual field format.
    var date_filter = tableData.filter(table_Data =>table_Data.datetime === entered_date);
    output.html("");

       // data.forEach((sighting) => {
     //   let row = tbody.append("tr");
       // Object.values(sightings).forEach(value => (
         //   let cell = row.append("td");
           // cell.text(value);
        //});
    //});

    if (date_filter.length !== 0){
            input_data(date_filter);
     }
     else if (date_filter.length === 0 && entered_date.length > 0){
        output.append("tr").append("td").text("Nothing found.");
    }  
          
     else {
            input_data(tableData);
        }

    });





    // Function to handle input change
// const handleChange = () => {
    // grab the value of the input field
    // let value = d3.event.target.value;
  
    // clear the existing output
    // output.html("");
  
    // let frequencyCounts = counter(value);
   //  Object.entries(frequencyCounts).forEach(([key, value]) => {
     //  let li = output.append("li").text(`${key}: ${value}`);
  //   });
  // }
  
  // text.on("change", handleChange);
