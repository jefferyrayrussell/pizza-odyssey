// print to the developer console to makesure javascript is working!
console.log('javascript is working');

/*Organizing your Code!
1. Global Variables
2. Constructor Functions
3. Methods
4. Functions
5. Constructor Objects
6. Method/Function Calls
7. Commented out Ascii Art

define function for use later*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// a object constuctor is a template for a object
// they enable you to make many objects that have the same properties and method
// declaring an object constructor looks like makeing a new function
// excepty that we name them with captol letters

function PizzaLocation(name){
  // we create properties with the object constructor using this.name = "what ever you want"
  this.name = name;
  this.hourlyData = [];
}

// we add methods to a object constuctor by adding functions to its prototype
PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

// when we create a new object from this constructor we have to use the 'new' keyword
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

var firsthill = new PizzaLocation('firsthill');
firsthill.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
firsthill.pushHourlyData(new HourlyData('12:00 pm', 8, 20, 6, 16));
firsthill.pushHourlyData(new HourlyData('1:00 pm', 8, 20, 6, 16));

console.log('firsthill');

var theinternationaldistrict = new PizzaLocation('theinternationaldistrict');
theinternationaldistrict.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
theinternationaldistrict.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
theinternationaldistrict.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
theinternationaldistrict.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
theinternationaldistrict.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
theinternationaldistrict.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
theinternationaldistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
theinternationaldistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
theinternationaldistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
theinternationaldistrict.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
theinternationaldistrict.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
theinternationaldistrict.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
theinternationaldistrict.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
theinternationaldistrict.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
theinternationaldistrict.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
theinternationaldistrict.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
theinternationaldistrict.pushHourlyData(new HourlyData('12:00 pm', 8, 20, 6, 16));
theinternationaldistrict.pushHourlyData(new HourlyData('1:00 pm', 8, 20, 6, 16));

console.log('theinternationaldistrict');

var southlakeunion = new PizzaLocation('southlakeunion');
southlakeunion.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('2:00 pm', 5, 15, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('3:00 pm', 5, 15, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('4:00 pm', 5, 15, 0, 4));
southlakeunion.pushHourlyData(new HourlyData('5:00 pm', 25, 39, 13, 18));
southlakeunion.pushHourlyData(new HourlyData('6:00 pm', 25, 39, 13, 18));
southlakeunion.pushHourlyData(new HourlyData('7:00 pm', 25, 39, 13, 18));
southlakeunion.pushHourlyData(new HourlyData('8:00 pm', 22, 36, 5, 22));
southlakeunion.pushHourlyData(new HourlyData('9:00 pm', 22, 36, 5, 22));
southlakeunion.pushHourlyData(new HourlyData('10:00 pm', 22, 36, 5, 22));
southlakeunion.pushHourlyData(new HourlyData('11:00 pm', 5, 21, 16, 31));
southlakeunion.pushHourlyData(new HourlyData('12:00 pm', 5, 21, 16, 31));
southlakeunion.pushHourlyData(new HourlyData('1:00 pm', 5, 21, 16, 31));

console.log('southlakeunion');

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
