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

    //select the input element(s)
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");


    //get the value property of the input elements
    var date = inputDate.property("value");
    var city = inputCity.property("value");
    var stateAbr = inputState.property("value");
    var countryAbr = inputCountry.property("value");
    var shape = inputShape.property("value");

    var filterValues = {}
    if (date) {
        filterValues.datetime = date;
    }
    if (city) {
        filterValues.city = city;
    }
    if (stateAbr) {
        filterValues.state = stateAbr;
    }
    if (countryAbr) {
        filterValues.country = countryAbr;
    }
    if (shape) {
        filterValues.shape = shape;
    }
    console.log(filterValues);


    var sightings = tableData.filter(sighting => { 
        var sightingsArr = Object.values(sighting).map(i => i);
        console.log(sightingsArr.some(Object.values(filterValues)));
        
    });    
    
    sightings.forEach( item =>  {
        var newRow = d3.select('tbody').append('tr');
        Object.entries(item).forEach( ([key,value]) =>{
            newRow.append('td').text(value);
        });
    });
}