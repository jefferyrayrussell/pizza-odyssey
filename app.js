/* Here is a message printed to the developer console to makesure javascript
is working! */
console.log('javascript is working');

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

PizzaLocation.prototype.pushHourlyData = function(time, pizzasSold, deliveriesMade, driversNeeded){
  this.hourlyData.push(time, pizzasSold, deliveriesMade, driversNeeded);
};

/* A second object constructor is named HourlyData. There are five
parameters in this constructor which are used to create four properties this
time, this.pizzasSold, this.deliveriesMade, and this.driversNeeded. The random
number generator function described above is employed to determine the values of
two of the properties. The math method Math.ceil is use to round up the number
created by dividing the number of deliveries made by the 3, the number of
deliveries a driver is expected to make in an hour. */

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

/*The lengthy six sections code found below is the creation of new object
instances resulting from constructer HourlyData. The property values
created are stored in an object with a name corresponding to the hourly work
prodcution data of each of the pizza store branch locations.  The data created
is then pushed into the property this.hourlyData of the constructor
PizzaLocation; this data is stored in an array. */

var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 pm', 8, 15, 6, 16));

console.log('ballard');

var firstHill = new PizzaLocation('firstHill');
firstHill.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('12:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00 pm', 8, 20, 6, 16));

console.log('firstHill');

var theInternationalDistrict = new PizzaLocation('theInternationalDistrict');
theInternationalDistrict.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
theInternationalDistrict.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
theInternationalDistrict.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
theInternationalDistrict.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
theInternationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 8, 20, 6, 16));
theInternationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 8, 20, 6, 16));

console.log('theInternationalDistrict');

var southLakeUnion = new PizzaLocation('southLakeUnion');
southLakeUnion.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('2:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('3:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('4:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('5:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('6:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('7:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('8:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('9:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('10:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('11:00 pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('12:00 pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00 pm', 5, 21, 16, 31));

console.log('southLakeUnion');

var georgetown = new PizzaLocation('georgetown');
georgetown.pushHourlyData(new HourlyData('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyData('6:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyData('7:00 pm', 6, 9, 5, 18));
georgetown.pushHourlyData(new HourlyData('8:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyData('9:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyData('10:00 pm', 4, 8, 2, 5));
georgetown.pushHourlyData(new HourlyData('11:00 pm', 2, 4, 3, 11));
georgetown.pushHourlyData(new HourlyData('12:00 pm', 2, 4, 3, 11));
georgetown.pushHourlyData(new HourlyData('1:00 pm', 2, 4, 3, 11));

console.log('georgetown');

var ravenna = new PizzaLocation('ravenna');
ravenna.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 pm', 2, 4, 3, 11));

console.log('ravenna');

/* A table is created for each branch location.  There is a heading written in
html above the table indicating each of the six locations.  Each table has 18
table rows corresponding to the 18 work hours of the day.  Above the table rows
are four table headings (Work Hour, Pizzas Sold, Deliveries Made, Drivers
Needed). Consequently there are four corresponding cells of table data in
each row. */

function generateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function makeTable(store, storeId){
  var pizzaTable = document.getElementById(storeId);
  for(var i = 0; i < store.hourlyData.length; i++) {
    var fancyRow = generateDataRow([store.hourlyData[i].time, store.hourlyData[i].pizzasSold, store.hourlyData[i].deliveriesMade, store.hourlyData[i].driversNeeded]);
    pizzaTable.appendChild(fancyRow);
  }
}

makeTable(ballard, 'BallardTable');
makeTable(firstHill, 'FirstHillTable');
makeTable(theInternationalDistrict, 'InternationalDistrictTable');
makeTable(southLakeUnion, 'southLakeUnionTable');
makeTable(georgetown, 'GeorgetownTable');
makeTable(ravenna, 'RavennaTable');
