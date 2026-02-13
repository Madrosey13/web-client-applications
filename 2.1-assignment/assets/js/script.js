"use strict";

// get miles driven from user
let miles = parseFloat(prompt("Enter miles driven"));
miles = miles.toFixed(2)

// get gallons used from user
let gallons = parseFloat(prompt("Enter gallons of gas used"));
gallons = gallons.toFixed(2);

// calculate mpg
const mpg = (miles/gallons).toFixed(2);

// display results
const html = "<p>Miles driven = " + miles + "</p>" + "<p>Gallons of gas = " + gallons + "</p>" + "<p>Miles per gallon = " + mpg + "<p>";
document.write(html);