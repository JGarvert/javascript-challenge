// from data.js
var tableData = data;

// Use D3 to select object in the HTML code.

var output = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var date_crit = d3.select("#datetime");

// Retrieve JSON keys
var key_list = Object.keys(tableData[0])

// Fill HTML table with data
var input_data = (data_source ) => {
    data_source.forEach(sighting => {
        var next_row = output_table.append("tr");
        key_list.forEach(key => {
            next_row.append("td").text(sighting[key]);
        });

    });

}
input_data(tableData);
