// print to the developer console to makesure javascript is working!
console.log('javascript is working');

/* A local pizza store owner with six branch locations needs information for her
business planning; specifically she needs to know how many pizzas she sells per
week for her pubicity page and she needs to know the number of pizza delivery
drivers she needs for each hour of business at each location.

Each of the six branches is open identical hours 8 a.m. to 2 a.m. Tuesday
through Sunday.  Randomly generated data will be used to determine for each hour
of the work week at each location: the number of pizzas sold and the number of
deliveries made.  It is assumed that a driver can deliver 3 pizzas per hour.
The pizza store owner wants the data page for each location to include the work
hour of the day, the number of pizzas sold, the number of deliveries made, and
the number of delivery drivers recommended.

Each line of the data page for a particular location will come from an
hourly data array that includes: location, time, pizza sold, and deliveries
made.

TASK  Create a function to gather that data and place it in an array that can
be moved to the sales-data.html page.  

The following function will generate a random number between two assigned numbers,
inorder to calculate the number of pizzas sold per hour and the number of pizza
deliveries per hour.  The two numbers which serve as arguments in the function
are based on the owner's market analysis. */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* Each store and its properties which include object literals,
one for each store model, this program reports out the
properties: name, number of pizzas sold, number of deliveries made



//each store is an object//


/*var store = {
  location: 'Ballard',
  salesData: [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven]
};

//each hour is an object that has the properties timeOfDay, pizzasSold,
//pizzasDeliveries, and pizzaDrivers
//the location in the object store needs to published
//each item in the object hou one needs to be published

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

va


function getNumberOfDrivers (pizzasDelivered / )

*/


//make hourly data in an empty array; create a function that is called
function addHourlySalesDataToLocation(storeLocation, time, pizzasSold, deliveriesMade){
  storelocation.hourlyData.push({
    time:time,
    pizzasSold: pizzasSold,
    deliveriesMade: deliveriesMade,
    driversNeeded: Math.ceil(deliveriesMade / 3)
  });
}

var ballard = {
  name: 'ballard',
  hourlyData: []
};


var ballard = {
  name: 'ballard'
  hourlyData: [
    {
      time: '8:00',
      pizzasSold: getRandomIntInclusive(0, 4)
      pizzaDeliveries: getRandomIntInclusive(0, 4)
    }
  ]
};

var ballardUL = document.getElementById(ballard.name)
var eightOclockLi;
for (var i=0; i < ballard.hourlyData.length; i++){}

var eightOclockLi = document.createElement('Li');
eightoclockLi.tetContent = ballard.hourlyData[0].time + 'pizzas sold' + ballard.hourly Data[0]pizzasSold;
ballardUL.appendChild(eightOclockLi);
}

//wrap the above in a function so that we can just simply add the store in;


var Hour1 = {
  location:  'Ballard',
  timeOfDay:  '8:00 a.m.'
  pizzasSold: 4,
  pizzaDeliveries: 4,
  pizzaDrivers: 2,
}

// create an element and add it to the end of the dom
// 1) create the element
var hour1 = document.createElement('p');

// 2) set the content and/or any atributes
// to set an atribute use .setAttribute(<atributeName>, <atributeValue>)
hour1.setAttribute('id', 'firstPTag');
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


/*

var hourOne = {
  timeOfDay: '8:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzaDeliveries: getRandomIntInclusive(0,4),
  pizzaDrivers:
}
var



var hourTwo = {
  timeOfDay: '9:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
  pizzaDeliverers:
}

var hourThree = {
  timeOfDay: '10:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
  pizzaDeliverers:
}
*/
