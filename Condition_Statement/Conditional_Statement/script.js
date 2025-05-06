// 1 GRADE SYSTEM

// let grade = 85;

// if (grade >= 90 && grade <= 100) {
//     console.log(grade, "Your Grade is A. Excellent")
// }
// else if (grade >= 80 && grade < 90) {
//     console.log(grade, "Your Grade is B. Very Good")
// }
// else if (grade >= 70 && grade < 80) {
//     console.log(grade, "Your Grade is C. GOOD")
// } else if (grade >= 60 && grade < 70) {
//     console.log(grade, "Your Grade is D. need improvement")
// } else if (grade >= 50 && grade < 60) {
//     console.log(grade, "Your Grade is E. Do Hard Work ")
// }
// else{
//     console.log(grade, " You are Fail! Better Luck Next Time ")
// }


// 2  BILL

// let price = 500;
// let quantity = 4;
// let tax = 20;

// let total_bill = (price * quantity) + tax;

// console.log(total_bill);


// 4 INTREST
// let principal = 1000; 
// let rate = 5;         
// let time = 2;  

// const simple_Interest = (principal * rate * time) / 100;
// console.log( simple_Interest);

// Password

let currentPassword = "OldPassword123";
let newPassword = "NewPassword456";
let confirmPassword = "NewPassword456";


if (currentPassword === storedPassword) {

  if (newPassword.length >= 8) {

    if (newPassword === confirmPassword) {
      
      storedPassword = newPassword;
      console.log("Password changed successfully!");
    } else {
      console.log("New password and confirmation do not match.");
    }
  } else {
    console.log("New password must be at least 8 characters long.");
  }
} else {
  console.log("Current password is incorrect.");
}