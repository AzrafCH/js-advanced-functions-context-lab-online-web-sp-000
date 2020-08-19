/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(arr) {
   let obj = {
     firstName: arr[0],
     familyName: arr[1],
     title: arr[2],
     payPerHour: arr[3],
     timeInEvents: [],
     timeOutEvents: []
   }
   return obj
 }

 function createEmployeeRecords(arrayOfArrays) {
   let theArray = [];
   arrayOfArrays.forEach(element => {
     theArray.push(createEmployeeRecord(element))
   });
   return theArray
 }

 function createTimeInEvent(obj, timeStamp) {
   let hour = parseInt(timeStamp.split(' ')[1]);
   let date = timeStamp.split(' ')[0];
   obj.timeInEvents.push({type: "TimeIn", hour: hour, date: date})
   return obj
 }

 function createTimeOutEvent(obj, timeStamp) {
   let hour = parseInt(timeStamp.split(' ')[1]);
   let date = timeStamp.split(' ')[0];
   obj.timeOutEvents.push({type: "TimeOut", hour: hour, date: date})
   return obj
 }

 function hoursWorkedOnDate(obj, timeStamp) {
   let timeIn = obj.timeInEvents.find(x => x.date === timeStamp)
   let timeOut = obj.timeOutEvents.find(x => x.date === timeStamp)
   let result = (timeOut.hour - timeIn.hour) / 100
   return result
 }

 function wagesEarnedOnDate(obj, timeStamp) {
   return hoursWorkedOnDate(obj, timeStamp) * obj.payPerHour
 }

 function allWagesFor(obj) {
   let eligibleDates = obj.timeInEvents.map(function(e){
      return e.date
    })

  let payable = eligibleDates.reduce(function(memo, d){
      return memo + wagesEarnedOnDate(obj, d)
    }, 0)
  return payable
 }

 function calculatePayroll(array) {
   let sum = array.map((e) => allWagesFor(e))
   return sum.reduce((num, sum) => num + sum)
 }

 function findEmployeeByFirstName(srcArray, firstName) {
   return srcArray.find(x => {return x.firstName === firstName})
 }
