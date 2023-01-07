/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let meter = 0;
let liter = 0;
let kilogram = 0;
let feet = 0;
let gallon = 0;
let pound = 0;


function convert(){

    const metric = document.getElementById("metric");
    const meterElement = document.getElementById("meter");
    const literElement = document.getElementById("liter");
    const kilogramElement = document.getElementById("kilogram");
    let inputValue = metric.value ;

    if(isNaN(inputValue)){
        alert("Not Convertable!");
        return false;
    }
    inputValue = parseInt(inputValue);



    meter = inputValue * 3.281;
    liter = inputValue * 0.264;
    kilogram = inputValue * 2.204;

    feet = inputValue / 3.281;
    gallon = inputValue / 0.264;
    pound = inputValue / 2.204;

    
    meterElement.textContent = inputValue + " meters =  " + meter.toFixed(3).toString() + " feet |" + inputValue + " feet = " + feet.toFixed(3).toString() + " meters" ;
    literElement.textContent = inputValue + " liters =  " + liter.toFixed(3).toString() + " gallon |" + inputValue + " gallons = " + gallon.toFixed(3).toString() + " liters"; 
    kilogramElement.textContent = inputValue + " kilograms =  " + kilogram.toFixed(3).toString() + " pound |" + inputValue + " pounds = " + pound.toFixed(3).toString() + " kilogram"; 


    metric.value = null;




}