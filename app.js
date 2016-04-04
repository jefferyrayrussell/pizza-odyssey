console.log('javascript works');

//object constructor for each pizza3001 location
function PizzaLocation(locationName){
  this.locationName = locationName;
  this.hourlyData = [];
};

//object method for pushing hourly data into the object property array
PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

//function for getting random number for market projections
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//object constructor for essential hourly report data
function HourlyData(time, minSold, maxSold, minDeliveries, maxDeliveries){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minSold, maxSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

//hourly location market estimations to be used in the above constructors
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
ballard.pushHourlyData(new HourlyData('12:00 am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));

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
firstHill.pushHourlyData(new HourlyData('12:00 am', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00 am', 8, 20, 6, 16));

var internationalDistrict = new PizzaLocation('internationalDistrict');

internationalDistrict.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
internationalDistrict.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
internationalDistrict.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
internationalDistrict.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
internationalDistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
internationalDistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
internationalDistrict.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
internationalDistrict.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
internationalDistrict.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
internationalDistrict.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
internationalDistrict.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
internationalDistrict.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
internationalDistrict.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
internationalDistrict.pushHourlyData(new HourlyData('12:00 am', 8, 20, 6, 16));
internationalDistrict.pushHourlyData(new HourlyData('1:00 am', 8, 20, 6, 16));

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
southLakeUnion.pushHourlyData(new HourlyData('12:00 am', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00 am', 5, 21, 16, 31));

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
georgetown.pushHourlyData(new HourlyData('12:00 am', 2, 4, 3, 11));
georgetown.pushHourlyData(new HourlyData('1:00 am', 2, 4, 3, 11));

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
ravenna.pushHourlyData(new HourlyData('12:00 am', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 am', 2, 4, 3, 11));

// these two functions below are used for the creation of sales charts
function createDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function makeTable(userLocation){
  var pizzaTable = document.getElementById('tableLocation');

  var tableHeading = document.createElement('h3');
  tableHeading.textContent = (locationName + ' Pizza3001');
  pizzaTable.appendChild(tableHeading);

  var headerRow = document.createElement('tr');

  var headerTime = document.createElement('th');
  headerTime.textContent = ('Time');
  headerRow.appendChild(headerTime);

  var headerTime = document.createElement('th');
  headerTime.textContent = ('Pizzas Sold');
  headerRow.appendChild(headerTime);

  var headerTime = document.createElement('th');
  headerTime.textContent = ('Deliveries');
  headerRow.appendChild(headerTime);

  var headerTime = document.createElement('th');
  headerTime.textContent = ('Drivers Needed');
  headerRow.appendChild(headerTime);

  pizzaTable.appendChild(headerRow);

  for(var i = 0; i < userLocation.hourlyData.length; i++) {
    var dataRow = createDataRow([userLocation.hourlyData[i].time, userLocation.hourlyData[i].pizzasSold, userLocation.hourlyData[i].deliveriesMade, userLocation.hourlyData[i].driversNeeded]);
    pizzaTable.appendChild(dataRow);
  }
}
// these are the arguments used to call the table making functions
locationName = ('Ballard');
makeTable(ballard);
locationName = ('First Hill');
makeTable(firstHill);
locationName = ('International District');
makeTable(internationalDistrict);
locationName = ('South Lake Union');
makeTable(southLakeUnion);
locationName = ('Georgetown');
makeTable(georgetown);
locationName = ('Ravenna');
makeTable(ravenna);

// function creates an active chart in which data can be entered, processed, and reported.
function collectNewStoreData(event){
  event.preventDefault();

  var locationName = event.target.userLocation.value;

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

  var userLocation = new PizzaLocation(locationName);

  userLocation.pushHourlyData(new HourlyData('8:00 am', minSoldTimeSpan1, maxSoldTimeSpan1, minDeliveriesTimeSpan1, maxDeliveriesTimeSpan1));
  userLocation.pushHourlyData(new HourlyData('9:00 am', minSoldTimeSpan1, maxSoldTimeSpan1, minDeliveriesTimeSpan1, maxDeliveriesTimeSpan1));
  userLocation.pushHourlyData(new HourlyData('10:00 am', minSoldTimeSpan1, maxSoldTimeSpan1, minDeliveriesTimeSpan1, maxDeliveriesTimeSpan1));
  userLocation.pushHourlyData(new HourlyData('11:00 am', minSoldTimeSpan2, maxSoldTimeSpan2, minDeliveriesTimeSpan2, maxDeliveriesTimeSpan2));
  userLocation.pushHourlyData(new HourlyData('12:00 pm', minSoldTimeSpan2, maxSoldTimeSpan2, minDeliveriesTimeSpan2, maxDeliveriesTimeSpan2));
  userLocation.pushHourlyData(new HourlyData('1:00 pm', minSoldTimeSpan2, maxSoldTimeSpan2, minDeliveriesTimeSpan2, maxDeliveriesTimeSpan2));
  userLocation.pushHourlyData(new HourlyData('2:00 pm', minSoldTimeSpan3, maxSoldTimeSpan3, minDeliveriesTimeSpan3, maxDeliveriesTimeSpan3));
  userLocation.pushHourlyData(new HourlyData('3:00 pm', minSoldTimeSpan3, maxSoldTimeSpan3, minDeliveriesTimeSpan3, maxDeliveriesTimeSpan3));
  userLocation.pushHourlyData(new HourlyData('4:00 pm', minSoldTimeSpan3, maxSoldTimeSpan3, minDeliveriesTimeSpan3, maxDeliveriesTimeSpan3));
  userLocation.pushHourlyData(new HourlyData('5:00 pm', minSoldTimeSpan4, maxSoldTimeSpan4, minDeliveriesTimeSpan4, maxDeliveriesTimeSpan4));
  userLocation.pushHourlyData(new HourlyData('6:00 pm', minSoldTimeSpan4, maxSoldTimeSpan4, minDeliveriesTimeSpan4, maxDeliveriesTimeSpan4));
  userLocation.pushHourlyData(new HourlyData('7:00 pm', minSoldTimeSpan4, maxSoldTimeSpan4, minDeliveriesTimeSpan4, maxDeliveriesTimeSpan4));
  userLocation.pushHourlyData(new HourlyData('8:00 pm', minSoldTimeSpan5, maxSoldTimeSpan5, minDeliveriesTimeSpan5, maxDeliveriesTimeSpan5));
  userLocation.pushHourlyData(new HourlyData('9:00 pm', minSoldTimeSpan5, maxSoldTimeSpan5, minDeliveriesTimeSpan5, maxDeliveriesTimeSpan5));
  userLocation.pushHourlyData(new HourlyData('10:00 pm', minSoldTimeSpan5, maxSoldTimeSpan5, minDeliveriesTimeSpan5, maxDeliveriesTimeSpan5));
  userLocation.pushHourlyData(new HourlyData('11:00 pm', minSoldTimeSpan6, maxSoldTimeSpan6, minDeliveriesTimeSpan6, maxDeliveriesTimeSpan6));
  userLocation.pushHourlyData(new HourlyData('12:00 am', minSoldTimeSpan6, maxSoldTimeSpan6, minDeliveriesTimeSpan6, maxDeliveriesTimeSpan6));
  userLocation.pushHourlyData(new HourlyData('1:00 am', minSoldTimeSpan6, maxSoldTimeSpan6, minDeliveriesTimeSpan6, maxDeliveriesTimeSpan6));

  function createDataRow(inputArray){
    var row = document.createElement('tr');
    var col;
    for(var i = 0; i < inputArray.length; i++){
      col = document.createElement('td');
      col.textContent = inputArray[i];
      row.appendChild(col);
    }
    return row;
  }

  function makeTable(userLocation){
    var pizzaTable = document.getElementById('tableLocation');

    var tableHeading = document.createElement('h3');
    tableHeading.textContent = (locationName + ' Pizza3001');
    pizzaTable.appendChild(tableHeading);

    var headerRow = document.createElement('tr');

    var headerTime = document.createElement('th');
    headerTime.textContent = ('Time');
    headerRow.appendChild(headerTime);

    var headerTime = document.createElement('th');
    headerTime.textContent = ('Pizzas Sold');
    headerRow.appendChild(headerTime);

    var headerTime = document.createElement('th');
    headerTime.textContent = ('Deliveries');
    headerRow.appendChild(headerTime);

    var headerTime = document.createElement('th');
    headerTime.textContent = ('Drivers Needed');
    headerRow.appendChild(headerTime);

    pizzaTable.appendChild(headerRow);

    for(var i = 0; i < userLocation.hourlyData.length; i++) {
      var dataRow = createDataRow([userLocation.hourlyData[i].time, userLocation.hourlyData[i].pizzasSold, userLocation.hourlyData[i].deliveriesMade, userLocation.hourlyData[i].driversNeeded]);
      console.log(pizzaTable);
      pizzaTable.appendChild(dataRow);
    }
  }
  makeTable(userLocation);
}
var createNewStoreForm = document.getElementById('newStoreDataForm');
createNewStoreForm.addEventListener('submit', collectNewStoreData);
