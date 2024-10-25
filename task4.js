// // Write an arrow function getTotalBalanceByGender(users, gender)that takes two parameters:

// // first parameter users- array of user objects,
// // second parameter gender- a string containing the gender.
// // The function should use a chain of method calls and return the balance of users (property balance) whose gender (property gender) matches the value of the parameter gender.



// // Take the code below and paste it after your function declaration to check if it works correctly. The results of its execution will be displayed in the console.
const getTotalBalanceByGender = (users, gender) => {
    return users
    .filter(user => user.gender.trim() === gender)
    .map(user => user.balance)
    .reduce((total, balance) => total + balance, 0)
}

const allUserss = [
	 { 
    name:  "Moore Hensley" ,
     gender: "  male" ,
     balance:  2811 
  } ,
   { 
    name:  "Sharlene Bush" ,
     gender:  "female" ,
     balance:  3821 
  } ,
   { 
    name:  "Ross Vazquez" ,
     gender:  "male" ,
     balance:  3793 
  } ,
   { 
    name:  "Elma Head" ,
     gender:  "female" ,
     balance:  2278 
  } ,
   { 
    name:  "Carey Barr" ,
     gender:  "male" ,
     balance:  3951 
  } ,
   { 
    name:  "Blackburn Dotson" ,
     gender:  "male" ,
     balance:  1498 
  } ,
   { 
    name:  "Sheree Anthony" ,
     gender:  "female" ,
     balance:  2764 
  } 
] ;

console.log(getTotalBalanceByGender(allUserss, "male" )) ;  // 12053

console.log(getTotalBalanceByGender(allUserss, "female" )) ;  // 8863



// // Leave this code for your mentor to check.

// // What will the mentor look for when assessing:

// // Variable declared getTotalBalanceByGender;
// // The variable getTotalBalanceByGenderis assigned an arrow function with parameters (users, gender);
// // The function body uses a chain of methods in the correct order;
// // The parameter value usersdoes not change;
// // If the parameter value genderis a string "male", the function returns a number 12053;
// // If the parameter value genderis a string female, the function returns a number 8863;
// // Calling the function with random but valid arguments returns the correct value.