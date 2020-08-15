// from data.js
var tableData = data;

//select the button
var button = d3.select('#filter-btn');

//select the form
var form = d3.select("#form");

//create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

//complete event handler function for the form
function runEnter() {
    
    //clear previous outputs before populating sighting list from latest input
    var clearRow = d3.select('tbody')
    
    clearRow.html('');

    //prevent page from refresh
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement.property("value");

    //use the input to filter sightings by date
    var sightings = tableData.filter(sighting => sighting.datetime === inputValue);

    //add filtered sightings to html table
    sightings.forEach( item =>  {
        var newRow = d3.select('tbody').append('tr');
        Object.entries(item).forEach( ([key,value]) =>{
            newRow.append('td').text(value);
        });
    });
};
