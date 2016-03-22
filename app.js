// print to the developer console to makesure javascript is working!
console.log('javascript is working');
//each store is an object//
var store = {
  location: 'Ballard',
  salesData: [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven]
};

//each hour is an object that has the properties timeOfDay, pizzasSold,
//pizzasDelivered, and pizzaDeliverers
//the location in the object store needs to published
//each item in the object hou one needs to be published

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var hourOne = {
  timeOfDay: '8:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4)
  pizzasDelivered: getRandomIntInclusive(0,4)
  pizzaDeliverers:
}

var hourTwo = {
  timeOfDay: '9:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4)
  pizzasDelivered: getRandomIntInclusive(x,y)
  pizzaDeliverers:
}

var hourThree = {
  timeOfDay: '10:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,4)
  pizzasDelivered: getRandomIntInclusive(x,y)
  pizzaDeliverers:
}

var hourFour = {
  timeOfDay: '11:00 a.m.',
  pizzasSold: getRandomIntInclusive(0,7)
  pizzasDelivered: getRandomIntInclusive(0,4)
  pizzaDeliverers:
}

var hourFive = {
  timeOfDay: '12:00 p.m.',
  pizzasSold: getRandomIntInclusive(0,7)
  pizzasDelivered: getRandomIntInclusive(0,4)
  pizzaDeliverers:
}

var hourSix = {
  timeOfDay: '1:00 p.m.',
  pizzasSold: getRandomIntInclusive(0,7)
  pizzasDelivered: getRandomIntInclusive(0,4)
  pizzaDeliverers:
}

var hourSeven = {
  timeOfDay: '2:00 p.m.',
  pizzasSold: getRandomIntInclusive(2,15)
  pizzasDelivered: getRandomIntInclusive(1,4)
  pizzaDeliverers:
}
