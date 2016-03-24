/* Here is a message printed to the developer console to makesure javascript
is working! */
console.log('javascript is working');

/* Here are the global variables found in the javascript code. The developer has
attempted to order the code in a manner consistent with how it will be hoisted
and run in javascript.*/

var ballard, firstHill, theInternationalDistric, southLakeUnion, georgetown, ravenna;

/* Here is the function named getRandomIntInclusive that generates random
numbers used in the modeling of the number of pizzas sold and the number of
deliveries occuring at a particular location for any work hour of the week. */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Here is the primary object constructor in this program called PizzaLocation.
This constructor is a template used to creat new objects that represent
branches of the pizza store. This object constructor takes the value name.  The
constructor contains two properties objects.  One of the properties is composed
of the key this.name and the value name. The other property has the key
this.hourlyData and has the value of an empty array that will need to be filled.
The contents of this array will contain the critical information requested by
the pizza store owner.*/

function PizzaLocation(name){
  this.name = name;
  this.hourlyData = [];
}

/* Here is the constructor method created by means of prototype named
pushHourlyData. We add methods to an object construct by adding functions to its
prototype.  This constructor method is attached to the constructor object
PizzaLocation and will be employed to push data into an array named hourlyData
which is one of the objects properties. */

PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

/* A second object constructor is named HourlyDataManager. There are five
parameters in this constructor which are used to create four properties this
time, this.pizzasSold, this.deliveriesMade, and this.driversNeeded. The random
number generator function described above is employed to determine the values of
two of the properties. The math method Math.ceil is use to round up the number
created by dividing the number of deliveries made by the 3, the number of
deliveries a driver is expected to make in an hour. */

function HourlyDataManager(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

/*The lengthy six sections code found below is the creation of new object
instances resulting from constructer HourlyDataManager. The property values
created are stored in an object with a name corresponding to the hourly work
prodcution data of each of the pizza store branch locations.  The data created
is then pushed into the property this.hourlyData of the constructor
PizzaLocation; this data is stored in an array. */

var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new HourlyDataManager('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyDataManager('12:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyDataManager('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyDataManager('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyDataManager('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyDataManager('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyDataManager('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyDataManager('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyDataManager('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyDataManager('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyDataManager('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyDataManager('12:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyDataManager('1:00 pm', 8, 15, 6, 16));

console.log('ballard');

var firstHill = new PizzaLocation('firstHill');
firstHill.pushHourlyData(new HourlyDataManager('8:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyDataManager('9:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyDataManager('10:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyDataManager('11:00 am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyDataManager('12:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyDataManager('1:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyDataManager('2:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyDataManager('3:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyDataManager('4:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyDataManager('5:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyDataManager('6:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyDataManager('7:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyDataManager('8:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyDataManager('9:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyDataManager('10:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyDataManager('11:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyDataManager('12:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyDataManager('1:00 pm', 8, 20, 6, 16));

console.log('firstHill');

var theInternationalDistrict = new PizzaLocation('theInternationalDistrict');
theInternationalDistrict.pushHourlyData(new HourlyDataManager('8:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('9:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('10:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('11:00 am', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('12:00 pm', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('1:00 pm', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('2:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('3:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('4:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('5:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('6:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('7:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('8:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('9:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('10:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('11:00 pm', 8, 20, 6, 16));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('12:00 pm', 8, 20, 6, 16));
theInternationalDistrict.pushHourlyData(new HourlyDataManager('1:00 pm', 8, 20, 6, 16));

console.log('theInternationalDistrict');

var southLakeUnion = new PizzaLocation('southLakeUnion');
southLakeUnion.pushHourlyData(new HourlyDataManager('8:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('9:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('10:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('11:00 am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('12:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('1:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('2:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('3:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('4:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyDataManager('5:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyDataManager('6:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyDataManager('7:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyDataManager('8:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyDataManager('9:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyDataManager('10:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyDataManager('11:00 pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyDataManager('12:00 pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyDataManager('1:00 pm', 5, 21, 16, 31));

console.log('southLakeUnion');

var georgetown = new PizzaLocation('georgetown');
georgetown.pushHourlyData(new HourlyDataManager('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyDataManager('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyDataManager('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyDataManager('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyDataManager('12:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyDataManager('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyDataManager('2:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyDataManager('3:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyDataManager('4:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyDataManager('5:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyDataManager('6:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyDataManager('7:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyDataManager('8:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyDataManager('9:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyDataManager('10:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyDataManager('11:00 pm', 2, 4, 3, 11));
georgetown.pushHourlyData(new HourlyDataManager('12:00 pm', 2, 4, 3, 11));
georgetown.pushHourlyData(new HourlyDataManager('1:00 pm', 2, 4, 3, 11));

console.log('georgetown');

var ravenna = new PizzaLocation('ravenna');
ravenna.pushHourlyData(new HourlyDataManager('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('12:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyDataManager('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyDataManager('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyDataManager('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyDataManager('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyDataManager('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyDataManager('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyDataManager('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyDataManager('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyDataManager('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyDataManager('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyDataManager('12:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyDataManager('1:00 pm', 2, 4, 3, 11));

console.log('ravenna');

// how to crate an element..
// create an element
// set its attributes
// set its content
// add it to the dom

// create a table
// create a row add it to the table
// create th/td set there content add them to the row

// take in an array of strings and create a table row with td tags
function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

// take in an array of strings and create a table row with tr tags
function genorateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

// create a table
var peopleTable = document.createElement('table');

// create a row with th tags
var firstRow = genorateHeadingRow(['name', 'age', 'language']);

var secondRow = genorateDataRow(['dunc', '88', 'javascript']);
var thirdRow = genorateDataRow(['slug', '707', 'html']);
var fourthRow = genorateDataRow(['neo', '301', 'css']);

peopleTable.appendChild(firstRow);
peopleTable.appendChild(secondRow);
peopleTable.appendChild(thirdRow);
peopleTable.appendChild(fourthRow);

document.getElementById('table-demo').appendChild(peopleTable);




// create an element and add it to the end of the dom
// 1) create the element
var ptag = document.createElement('p');

// 2) set the content and/or any atributes
// to set an atribute use .setAttribute(<atributeName>, <atributeValue>)
ptag.setAttribute('id', 'firstPTag');
// set the content
ptag.textContent = 'hello world';

//3) add the tag to the body
document.body.appendChild(ptag);

// add an element to a tag with an id on the page
// 1) get a reference to the element in the dom using getElementById(<id>)
var bodyHeader = document.getElementById('body-header');

// 2) create a new element
var pageHeading = document.createElement('h1');
pageHeading.textContent = 'best page heading ever!';

// 3) add the element to the element with the id
bodyHeader.appendChild(pageHeading);

// var rowOne = document.createElement('tr');
// peopleTable.appendChild(rowOne);
// var rowOneColOne = document.createElement('th');
// rowOneColOne.textContent = "Name";
