var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


var vanilla = document.getElementById("vanilla_output");
vanilla.innerHTML = "This content generated with vanilla JavaScript.";

$("#jquery_output").html("This content generated with jQuery.");

// Functions and operators

function modulus(a, b) {
  return a % b;
}

var noodle = modulus(10,3);
console.log("10 % 3 = ", noodle);


function doMath(x, y, z) {
  return z(x, y);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

var noodle2 = doMath(10, 55, add);
var noodle3 = doMath(29, 390, subtract);

console.log("10 + 55 = ", noodle2);
console.log("29 - 390 = ", noodle3);

// Arrays

function sortedPlanets(alphaPlanets) {
	var alphabetical= Planets;
	return alphabetical.sort();
}

console.log('Planets', sortedPlanets(Planets));

var reversePlanets = Planets.map(function(element, index, array) {
  return element.split("").reverse().join("");
});

console.log("Planets Reversed: ", reversePlanets);


function longPlanets(element, index, array) {
  if(element.length >= 7) {
    return element;
  }
}

var filterPlanets = Planets.filter(longPlanets);
console.log("Planets  >=7 letters: ", filterPlanets);

function sevenOrMore(myArray) {
  var newArray = [];
  for(var i = 0; i < myArray.length; i++) {
    if(myArray[i].length >= 7) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

var greaterThanSeven  = sevenOrMore(Planets);
console.log("Filter:", greaterThanSeven);

// XHR

function getAnimals() {
  $.ajax("data/animals.json").done(function(result) {
    console.log("ainmals", result.animals);
  });
}

getAnimals();