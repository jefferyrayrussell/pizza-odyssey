/* My next steps are to: 1. Enhance the sales-data.html form to receive all the
info I need to create the new location data table. 2. Create a function in app.js
to take the new location data and place it in a table. 3.Create a counter so the
total estimated sales for week can be displayed on the advertising page.
4. Add CSS styling to both html pages. 5. Reorganize JS page in proper form.
6. Final update of the README.md */

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

/* A second object constructor is named HourlyData. There are five
parameters in this constructor which are used to create four properties this
time, this.pizzasSold, this.deliveriesMade, and this.driversNeeded. The random
number generator function described above is employed to determine the values of
two of the properties. The math method Math.ceil is use to round up the number
created by dividing the number of deliveries made by the 3, the number of
deliveries a driver is expected to make in an hour. */

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  var noDriver;
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  noDriver = Math.ceil(this.deliveriesMade / 3);
  if (noDriver === 0){
    this.driversNeeded = 'None';
  } else {
    this.driversNeeded = noDriver;
  }
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

var InternationalDistrict = new PizzaLocation('InternationalDistrict');
InternationalDistrict.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
InternationalDistrict.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
InternationalDistrict.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
InternationalDistrict.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
InternationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
InternationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
InternationalDistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
InternationalDistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
InternationalDistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
InternationalDistrict.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
InternationalDistrict.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
InternationalDistrict.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
InternationalDistrict.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
InternationalDistrict.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
InternationalDistrict.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
InternationalDistrict.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
InternationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 8, 20, 6, 16));
InternationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 8, 20, 6, 16));

console.log('InternationalDistrict');

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

/* The two functions below create the requested table. The function named
generateDataRow is used to determine both the content and size of the table.
The createElement method of DOM manipulation is used to create the elements
<tr> and <td>. These elements are given content when the parameter inputArray in
in the generateDataRow function is defined.  The four paramater specified
determines the number of rows in the table.*/

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

/* The calling of the function makeTable creates a separate table for each store
location.  When that function is called by providing the two arguments store and
storeID, the getElementByID DOM manipulation method is used to remove the storeId
on the sales-data html page and replacing it with the table. Using a loop the
contents of the next row are added to the row preceeding it until the data array
is exhausted.  */

function makeTable(store, storeId){
  var pizzaTable = document.getElementById(storeId);
  for(var i = 0; i < store.hourlyData.length; i++) {
    var dataRow = generateDataRow([store.hourlyData[i].time, store.hourlyData[i].pizzasSold, store.hourlyData[i].deliveriesMade, store.hourlyData[i].driversNeeded]);
    pizzaTable.appendChild(dataRow);
  }
}

/* Finally the function makeTable is called below by providing two arguments for each
store location and the pizza owner is very happy; for now!

These variables will be replaced by a function that takes the nameLocation from input
form and creates a heading on the html.*/

makeTable(ballard, 'ballardTable');
makeTable(firstHill, 'firstHillTable');
makeTable(InternationalDistrict, 'internationalDistrictTable');
makeTable(southLakeUnion, 'southLakeUnionTable');
makeTable(georgetown, 'georgetownTable');
makeTable(ravenna, 'ravennaTable');

function collectNewStoreData(event){
  event.preventDefault();

  var nameLocation = event.target.nameLocation.value;

  var minSoldTimeSpan1 = parseInt(event.target.minSoldTimeSpan1.value);
  var maxSoldTimeSpan1 = parseInt(event.target.maxSoldTimeSpan1.value);
  var minDeliveriesTimeSpan1 = parseInt(event.target.minDeliveriesTimeSpan1.value);
  var maxDeliveriesTimeSpan1 = parseInt(event.target.maxDeliveriesTimeSpan1.value);

  var minSoldTimeSpan2 = parseInt(event.target.minSoldTimeSpan2.value);
  var maxSoldTimeSpan2 = parseInt(event.target.maxSoldTimeSpan2.value);
  var minDeliveriesTimeSpan2 = parseInt(event.target.minDeliveriesTimeSpan2.value);
  var maxDeliveriesTimeSpan2 = parseInt(event.target.maxDeliveriesTimeSpan2.value);

  var minSoldTimeSpan3 = parseInt(event.target.minSoldTimeSpan3.value);
  var maxSoldTimeSpan3 = parseInt(event.target.maxSoldTimeSpan3.value);
  var minDeliveriesTimeSpan3 = parseInt(event.target.minDeliveriesTimeSpan3.value);
  var maxDeliveriesTimeSpan3 = parseInt(event.target.maxDeliveriesTimeSpan3.value);

  var minSoldTimeSpan4 = parseInt(event.target.minSoldTimeSpan4.value);
  var maxSoldTimeSpan4 = parseInt(event.target.maxSoldTimeSpan4.value);
  var minDeliveriesTimeSpan4 = parseInt(event.target.minDeliveriesTimeSpan4.value);
  var maxDeliveriesTimeSpan4 = parseInt(event.target.maxDeliveriesTimeSpan4.value);

  var minSoldTimeSpan5 = parseInt(event.target.minSoldTimeSpan5.value);
  var maxSoldTimeSpan5 = parseInt(event.target.maxSoldTimeSpan5.value);
  var minDeliveriesTimeSpan5 = parseInt(event.target.minDeliveriesTimeSpan5.value);
  var maxDeliveriesTimeSpan5 = parseInt(event.target.maxDeliveriesTimeSpan5.value);

  var minSoldTimeSpan6 = parseInt(event.target.minSoldTimeSpan6.value);
  var maxSoldTimeSpan6 = parseInt(event.target.maxSoldTimeSpan6.value);
  var minDeliveriesTimeSpan6 = parseInt(event.target.minDeliveriesTimeSpan6.value);
  var maxDeliveriesTimeSpan6 = parseInt(event.target.maxDeliveriesTimeSpan6.value);

  console.log('What value is the variable nameLocation? ', nameLocation);
  console.log('What value is the variable minSoldTimeSpan1? ', minSoldTimeSpan1);
  console.log('What value is the variable maxSoldTimeSpan1? ', maxSoldTimeSpan1);
  console.log('What value is the variable minDeliveriesTimeSpan1? ', minDeliveriesTimeSpan1);
  console.log('What value is the variable maxDeliveriesTimeSpan1? ', maxDeliveriesTimeSpan1);
}
var createNewStoreDataForm = document.getElementById('newStoreDataForm');
createNewStoreDataForm.addEventListener('submit', collectNewStoreData);

// nameObject = new StoreLocation(event.target.nameLocation.value)
