// Task 2. Users with a friend

// Write an arrow function getUsersWithFriend(users, friendName)that takes two parameters:

// first parameter users- array of user objects,
// second parameter friendName- name of friends to search for.


// The function should return an array of all users in array userswho have a friend named friendName. Each user's friends are stored in the property friends. If there are no users who have such a friend, the function should return an empty array.

// Tips:

// The method filter()can be used to create a new array with elements that meet a specified condition.
// Use the method includes()to check if an array friendscontains friendName.


// Take the code below and paste it after your function declaration to see if it works correctly. The console will display the results of its execution.



const allUsers  = [
   { 
    name:  "Moore Hensley" ,
     friends: [ "Sharron Pace" ]
   } ,
   { 
    name:  "Sharlene Bush" ,
     friends: [ "Briana Decker" , "Sharron Pace" ]
   } ,
   { 
    name:  " Ross Vazquez" ,
     friends: [ "Marilyn Mcintosh" , "Padilla Garrison" , "Naomi Buckner" ]
   } ,
   { 
    name:  "Elma Head" ,
     friends: [ "Goldie Gentry" , "Aisha Tran" ]
   } ,
   { 
    name:  "Carey Barr" ,
     friends: [ "Jordan Sampson" , "Eddie Strong" ]
   } ,
   { 
    name:  "Blackburn Dotson" ,
     friends: [ "Jacklyn Lucas" , "Linda Chapman" ]
   } ,
   { 
    name:  "Sheree Anthony" ,
     friends: [ "Goldie Gentry" , "Briana Decker" ]
   } 
] ;

const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends && user.friends.includes(friendName))
}


console.log(getUsersWithFriend(allUsers, "Briana Decker" )) ;  
// [ 
// { 
// name: "Sharlene Bush", 
// friends: ["Briana Decker", "Sharron Pace"] 
// }, 
// { 
// name: "Sheree Anthony", 
// friends: ["Goldie Gentry", "Briana Decker"] 
// } 
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry" )) ; 
// [ 
// { 
// name: "Elma Head", 
// friends: ["Goldie Gentry", "Aisha Tran"] 
// }, 
// { 
// name: "Sheree Anthony", 
// friends: ["Goldie Gentry", "Briana Decker"] 
// } 
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )) ;  // []



// Leave this code for your mentor to check.

// What will the mentor look for when assessing:

// Variable declared getUsersWithFriend;
// The variable getUsersWithFriendis assigned an arrow function with parameters (users, friendName);
// To iterate over the parameter, usersthe method is used filter();
// If the parameter value friendNameis a string "Briana Decker", the function returns an array of user objects named Sharlene Bushand Sheree Anthony;
// If the parameter value friendNameis a string "Goldie Gentry", the function returns an array of user objects named Elma Headand Sheree Anthony;
// If the parameter value friendNameis a string "Adrian Cross", the function will return an empty array;
// Calling the function with random but valid arguments returns the correct value.
