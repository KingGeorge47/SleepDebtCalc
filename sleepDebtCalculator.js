const getSleepHours = day => {
  if (day === 'monday') {
    return 8
  } else if (day === 'friday') {
    return 7
  }else {
    return 'error'
  }
}
// test the function by calling it multiple times
console.log(getSleepHours('monday'))
console.log(getSleepHours('tuesday'))
console.log(getSleepHours('friday'))

//create a new function that takes no parameters
const getActualSleepHours = () => {
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

//create a new function that takes no parameters
const getIdealSleepHours = () => {
  const idealHours = 6
  return idealHours * 7
}
console.log(getIdealSleepHours())

//create a new function that takes no parameters
const calculateSleepDebt = () => {
  const actualSllepHours = getActualSleepHours ()
  const idealSleepHours = getIdealSleepHours ()

//use if/else to create a control flow statement 

  if (getActualSleepHours === getIdealSleepHours) {
    console.log('User got the perfect amount of sleep')
  } else {
    console.log('You are good on sleep!')
  }
 if (getActualSleepHours > getIdealSleepHours) {
    console.log('User got too much sleep')
  } else {
    console.log('You need to sleep less!')
  }
  if (getActualSleepHours < getIdealSleepHours) {
    console.log('User should get some more rest and sleep')
  } else {
    console.log('You really need to restup!!!')
  } 
}
//test calculator by calling the function
calculateSleepDebt();
