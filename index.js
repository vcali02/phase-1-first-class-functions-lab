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

//selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//createFareMultiplier() = higher-order function that takes in one argument, integer
//returns a function that MULTIPLIES a fare ride

const createFareMultiplier = function (fare) {
    return function(multiplier){
        return fare * multiplier
    }
}


const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(2))

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(3))

//selectDifferentDrivers() takes two arguments
//      an array of the names of Scuber's drivers
//      and either returnFirstTwoDrivers() or returnLastTwoDrivers() 

function selectDifferentDrivers(drivers, aFunction){
    //the below is just the "dress rehersal" / instruction 
    //for what to do with the parameters once they're passed into the function
    return aFunction(drivers)
}


console.log(selectDifferentDrivers(driversArr, returnLastTwoDrivers))























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
//     return function(multiplier) {
//          return fare * multiplier;
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