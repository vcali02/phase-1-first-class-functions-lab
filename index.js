// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

const createFareMultiplier = function (fare) {
    return function(multiplier) {return fare * multiplier;

    };
} 
 console.log(createFareMultiplier);

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = ( drivers, someFunction) => someFunction(drivers)

/*`selectDifferentDrivers()` — This function takes two arguments, an array of
  the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
  `returnLastTwoDrivers()` function. Based on these two arguments,
  `selectDifferentDrivers()` will return either the first two drivers or the
  last two drivers. */