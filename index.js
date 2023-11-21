//DRIVERS ARRAY

const driversArr = ['Antonia', 'Nuru', 'Amari', 'Mo']

//one argument: array of names of drivers
//return a new array with the 1st two drivers in the array

const returnFirstTwoDrivers = function (driversArr){
    return driversArr.slice(0, 2)
}

console.log(returnFirstTwoDrivers(driversArr))


//one argument: array of names of drivers
//return a new array with the last two drivers in the array

const returnLastTwoDrivers = function(driversArr){
    return driversArr.slice(-2)
}
console.log(returnLastTwoDrivers(driversArr))


































// Code your solution in this file!
// const returnFirstTwoDrivers = function (drivers) {
//     return drivers.slice(0, 2);
// }

// const returnLastTwoDrivers = function (drivers) {
//     return drivers.slice(-2);
// }

// const selectingDrivers = [
//     returnFirstTwoDrivers,
//     returnLastTwoDrivers,
// ]

// const createFareMultiplier = function (fare) {
//     return function(multiplier) {return fare * multiplier;

//     };
// } 
//  console.log(createFareMultiplier);

// const fareDoubler = createFareMultiplier(2) 

// const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = ( drivers, someFunction) => someFunction(drivers)

/*`selectDifferentDrivers()` — This function takes two arguments, an array of
  the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
  `returnLastTwoDrivers()` function. Based on these two arguments,
  `selectDifferentDrivers()` will return either the first two drivers or the
  last two drivers. */