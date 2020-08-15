// from data.js
var tableData = data;

//select the button
var button = d3.select('#filter-btn');

//select the form
var form = d3.select("#form");

//create event handlers
button.on('click', runEnter);
// form.on('submit', runEnter);

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

    console.log(date);
    console.log(city);
    console.log(stateAbr);
    console.log(countryAbr);
    console.log(shape);

    //use the inputs to create filters of all various combinations
    var allfilters = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.state === stateAbr &&
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var d_c_s_sh = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.state === stateAbr &&
        sighting.shape === shape);
    
    var d_c_co_sh = tableData.filter(sighting =>
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var d_s_co_sh = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.state === stateAbr &&
        sighting.country === countryAbr &&
        sighting.shape === shape);

    var c_s_co_sh = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.state === stateAbr &&
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var d_c_s_co = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.state === stateAbr &&
        sighting.country === countryAbr);
    
    var c_co_sh = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var d_co_sh = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var d_s_co = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.state === stateAbr &&
        sighting.country === countryAbr);
    
    var s_co_sh = tableData.filter(sighting =>
        sighting.state === stateAbr &&
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var c_s_co = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.state === stateAbr &&
        sighting.country === countryAbr);
    
    var d_c_s = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.state === stateAbr);
    
    var d_c_sh = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city &&
        sighting.shape === shape);

    var country_shape = tableData.filter(sighting =>
        sighting.country === countryAbr &&
        sighting.shape === shape);
    
    var state_shape = tableData.filter(sighting =>
        sighting.state === stateAbr &&
        sighting.shape === shape);
    
    var state_country = tableData.filter(sighting => 
        sighting.state === stateAbr &&
        sighting.country === countryAbr);
    
    var city_shape = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.shape === shape);

    var city_country = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.country === countryAbr);
    
    var city_state = tableData.filter(sighting => 
        sighting.city === city &&
        sighting.state === stateAbr);
    
    var date_shape = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.shape === shape);
    
    var date_country = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.country === countryAbr);
    
    var date_state = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.state === stateAbr);
    
    var date_city = tableData.filter(sighting => 
        sighting.datetime === date && 
        sighting.city === city);
    
    var date_only = tableData.filter(sighting => 
        sighting.datetime === date);
    
    var city_only = tableData.filter(sighting => 
        sighting.city === city);
    
    var state_only = tableData.filter(sighting =>
        sighting.state === stateAbr);
    
    var country_only = tableData.filter(sighting =>
        sighting.country === countryAbr);
    
    var shape_only = tableData.filter(sighting =>
        sighting.shape === shape);
    
    var newRow = d3.select('tbody').append('tr');

    if (date,city,stateAbr,countryAbr,shape){
        allfilters.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });    
    }
    else if (date,city,stateAbr,shape){
        d_c_s_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        }); 
    }
    else if (date,city,countryAbr,shape){
        d_c_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,stateAbr,countryAbr,shape){
        d_s_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });    
    }
    else if (city,stateAbr,countryAbr,shape){
        c_s_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,city,stateAbr,countryAbr){
        d_c_s_co.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (city,countryAbr,shape){
        c_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,countryAbr,shape){
        d_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });    
    }
    else if (date,stateAbr,countryAbr){
        d_s_co.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });    
    }
    else if (stateAbr,countryAbr,shape){
        s_co_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (city,stateAbr,countryAbr){
        c_s_co.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,city,stateAbr){
        d_c_s.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,city,shape){
        d_c_sh.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (countryAbr,shape){
        country_shape.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (stateAbr,shape){
        state_shape.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (stateAbr,countryAbr){
        state_country.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (city,shape){
        city_shape.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (city,countryAbr){
        city_country.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (city,stateAbr){
        city_state.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,shape){
        date_shape.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,countryAbr){
        date_country.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,stateAbr){
        date_state.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date,city){
        date_city.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                newRow.append('td').text(value);
            });
        });
    }
    else if (date){
        date_only.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                    newRow.append('td').text(value);
            });
        });
    }
    else if (city){
        city_only.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                    newRow.append('td').text(value);
            });
        });
    }
    else if (stateAbr){
        state_only.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                    newRow.append('td').text(value);
            });
        });
    }
    else if (countryAbr){
        country_only.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                    newRow.append('td').text(value);
            });
        });
    }
    else {
        shape_only.forEach( item =>  {
            Object.entries(item).forEach( ([key,value]) =>{
                    newRow.append('td').text(value);
            });
        });
    }
              
    // //add filtered sightings to html table
    // sightings.forEach( item =>  {
    //     var newRow = d3.select('tbody').append('tr');
    //     Object.entries(item).forEach( ([key,value]) =>{
    //         newRow.append('td').text(value);
    //     });
    // });
};
