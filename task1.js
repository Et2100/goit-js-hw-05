// Task 1: Usernames

// Write an arrow function getUserNames(users)that takes one parameter users— an array of user objects. The function should return an array of all user names (property name) from the array users.

const getUserNames =  (users) => {
    return users.map(user => user.name) 
    }


// Take the code below and paste it after your function declaration to verify that it works correctly. The console will display the results of its calls.



console.log (
   getUserNames ([
  {
    name : "Moore Hensley" ,
     email : "moorehensley@indexia.com" ,
     balance : 2811
  },
  {
    name : "Sharlene Bush" ,
     email : "sharlenebush@tubesys.com" ,
     balance : 3821
  },
  {
    name : "Ross Vazquez" ,
     email : "rossvazquez@xinware.com" ,
     balance : 3793
  },
  {
    name : "Elma Head" ,
     email : "elmahead@omatom.com" ,
     balance : 2278
  },
  {
    name : "Carey Barr" ,
     email : "careybarr@nurali.com" ,
     balance : 3951
  },
  {
    name : "Blackburn Dotson" ,
     email : "blackburndotson@furnigeer.com" ,
     balance : 1498
  },
  {
    name : "Sheree Anthony" ,
     email : "shereeanthony@kog.com" ,
     balance : 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]




// Leave this code for your mentor to check.

// What will the mentor look for when assessing:

// Variable declared getUserNames;
// The variable getUserNameswas assigned an arrow function with the parameter (users);
// To iterate over the parameter, usersthe method is used map();
// Calling the function with an array of users specified returns the array ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"];
// Calling the function with random but valid arguments returns the correct value.