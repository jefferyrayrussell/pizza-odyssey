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

The following function will generate a random number between two assigned numbers,
inorder to calculate the number of pizzas sold per hour and the number of pizza
deliveries per hour.  The two numbers which serve as arguments in the function
are based on the owner's market analysis. */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* The data that pertains to each pizza branch is stored in an object
created by literal notation.  The object is stored in a variable called
pizzaBranch. The data inside that object has five properties.

The first property has the key branchLocation.  There are six different
instances of this object as there are six different values to the key identified
as branch location.  These are: Ballard, First Hill, International District,
South Lake Union, Georgetown, and Ravenna.

The second property has the key workHour.  There will be 18 values for this key
corresponding to the 18 work hours of the day.

The third property has the key numberPizzas.  The forth property has the key
numberDeliveries. These values will be created using the getRandomIntInclusive
function using the arguments provided for the parameters.  There will be 18
separate values for each of these keys corresponding to the 18 workhours.

The fifth property has the key numberDrivers. This is created by dividing the
number of deliveries by three and rounding up.
Use numberDrivers: Math.ceil(numberDeliveries)/3 */

var pizzaBranch = {};
pizzaBranch.branchLocation = 'Ballard';
pizzaBranch.workHour = '8:00 a.m.';
pizzaBranch.numberPizzas = getRandomIntInclusive(0, 4);
pizzaBranch.numberDeliveries = getRandomIntInclusive(0, 4);
pizzaBranch.numberDrivers = Math.ceil(numberDeliveries / 3);

/*
Each line of the data page for a particular location will come from an
array called hourlySalesData that includes: work Hour, pizzas sold,deliveries
made, and the number of drivers recommended.

TASK  Create a function to gather the data for every branch and every work hour
and place it in an array. */

var hourlySalesData = [branchLocation, workHour, numberPizzas, numberDeliveries, numberDrivers];

/* TASK  Use DOM methods to move the contents of the hourlySalesData array onto
the sales-data.html page.

/*The total number of pizzas sold for the week needs to be calculated.

TASK Create a function to add up each of the hourly pizza sales for each of the
locations and multiply by the six day work week.
*/
