// Task 3. Sorting by number of friends

// Write an arrow function sortByDescendingFriendCount(users)that takes one parameter users- an array of user objects.



// The function should return an array of all users sorted by number of friends in descending order (property friends).





const sortByDescendingFriendCount = (users) => {
    return users.toSorted((a, b) => b.friends.length - a.friends.length);
}


// Take the code below and paste it after your function declaration to check if it works correctly. The results of its execution will be displayed in the console. 

console.log(
    sortByDescendingFriendCount([
      {
        name: "Moore Hensley" ,
        friends: [ "Sharron Pace" ],
        gender: "male"
      },
      {
        name: "Sharlene Bush" ,
        friends: [ "Briana Decker" , "Sharron Pace" ],
        gender: "female"
      },
      {
        name: "Ross Vazquez" ,
        friends: [ "Marilyn Mcintosh" , "Padilla Garrison" , "Naomi Buckner" ],
        gender: "male"
      },
      {
        name: "Elma Head" ,
        friends: [ "Goldie Gentry" , "Aisha Tran" ],
        gender: "female"
      },
      {
        name: "Carey Barr" ,
        friends: [ "Jordan Sampson" , "Eddie Strong" ],
        gender: "male"
      },
      {
        name: "Blackburn Dotson" ,
        friends: [ "Jacklyn Lucas" , "Linda Chapman" ],
        gender: "male"
      },
      {
        name: "Sheree Anthony" ,
        friends: [ "Goldie Gentry" , "Briana Decker" ],
        gender: "female"
      }
    ])
  );
  // [
   //    {
   //      name: "Ross Vazquez" ,
   //      friends: [ "Marilyn Mcintosh" , "Padilla Garrison" , "Naomi Buckner" ],
   //      gender: "male" 
  //    },
   //    {
   //      name: "Sharlene Bush" ,
   //      friends: [ "Briana Decker" , "Sharron Pace" ],
   //      gender: "female" 
  //    },
   //    {
   //      name: "Elma Head" ,
   //      friends: [ "Goldie Gentry" , "Aisha Tran" ],
   //      gender: "female" 
  //    },
   //    {
   //      name: "Carey Barr" ,
   //      friends: [ "Jordan Sampson" , "Eddie Strong " ],
   //      gender: "male" 
  //    },
   //    {
   //      name: "Blackburn Dotson" ,
   //      friends: [ "Jacklyn Lucas" , "Linda Chapman" ],
   //      gender: "male" 
  //    },
   //    {
   //      name: "Sheree Anthony" ,
   //      friends: [ "Goldie Gentry " , "Briana Decker" ],
   //      gender: "female" 
  //    },
   //    {
   //      name: "Moore Hensley" ,
   //      friends: [ "Sharron Pace" ],
   //      gender: "male" 
  //    }
   // ]
//    Leave this code for your mentor to check.

//    What will the mentor look for when assessing:
   
//    Variable declared sortByDescendingFriendCount;
//    The variable sortByDescendingFriendCountis assigned an arrow function with the parameter (users);
//    The parameter value usersdoes not change;
//    usersThe ; method is used to sort the parameter toSorted().
//    Calling the function with the specified array usersreturns a new array of users, sorted descending by their number of friends;
//    Calling the function with random but valid arguments returns the correct value.