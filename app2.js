console.log('javascript works');

function PizzaLocation(locationName){
  this.locationName = locationName;
  this.hourlyData = [];
};

PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HourlyData(time, minSold, maxSold, minDeliveries, maxDeliveries){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minSold, maxSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

function createTable(userLocation) {
  var tableHeading = document.createElement('h3');
  tableHeading.textContent = userLocation.name;
  document.getElementById('newStoreTableLocation').appendChild(tableHeading);

  var dataTable = document.createElement('table');
  var firstRow = createHeadingRow(['Time', 'Pizza Sold', 'Pizza Delivered', 'Drivers Recommended']);
  dataTable.appendChild(firstRow);
  var createTable = document.getElementById('newStoreTableLocation');
  for(var i = 0; i < userLocation.hourlyData.length; i++) {
    var dataRow = createDataRow([userLocation.hourlyData[i].time, userLocation.hourlyData[i].pizzasSold, userLocation.hourlyData[i].deliveriesMade, userLocation.hourlyData[i].driversNeeded]);
    pizzaTable.appendChild(dataRow);
  }

  document.getElementById('newStoreTableLocation').appendChild(dataTable);
}
/* OLD TABLE CREATOR FUNCTONS
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
  var pizzaTable = document.getElementById('newStoreTableLocation');
  for(var i = 0; i < storeId.hourlyData.length; i++) {
    var dataRow = generateDataRow([store.hourlyData[i].time, store.hourlyData[i].pizzasSold, store.hourlyData[i].deliveriesMade, store.hourlyData[i].driversNeeded]);
    pizzaTable.appendChild(dataRow);
  }
}
*/
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

  console.log('What value is the variable locationName? ', locationName);
  console.log('What value is the variable minSoldTimeSpan1? ', minSoldTimeSpan1);
  console.log('What value is the variable maxSoldTimeSpan1? ', maxSoldTimeSpan1);
  console.log('What value is the variable minDeliveriesTimeSpan1? ', minDeliveriesTimeSpan1);
  console.log('What value is the variable maxDeliveriesTimeSpan1? ', maxDeliveriesTimeSpan1);

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

  console.log(userLocation);
}

var createNewStoreForm = document.getElementById('newStoreDataForm');
createNewStoreForm.addEventListener('submit', collectNewStoreData);
