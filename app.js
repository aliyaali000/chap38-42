// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
// function power(a, b) {
//   return a ** b;
// }
// console.log(power(2, 3));


// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true; // It's a leap year
//   } else {
//     return false; // It's not a leap year
//   }
// }

// console.log(isLeapYear(2024)); // Output: true
// console.log(isLeapYear(1900)); // Output: false
// console.log(isLeapYear(2000)); // Output: true
// console.log(isLeapYear(2023)); // Output: false


// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//   var S = calculateSemiPerimeter(a, b, c);
//   if (a + b > c && a + c > b && b + c > a) {
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
//   } else {
//     return "Invalid triangle sides";
//   }
// }

// var a = parseFloat(prompt("Enter side a:"));
// var b = parseFloat(prompt("Enter side b:"));
// var c = parseFloat(prompt("Enter side c:"));

// var area = calculateTriangleArea(a, b, c);
// alert("he area of the triangle is" + area);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// function calculateAverage(mark1, mark2, mark3) {
//   var sum = mark1 + mark2 + mark3;
//   return sum / 3;
// }

// function calculatePercentage(mark1, mark2, mark3) {
//   var sum = mark1 + mark2 + mark3;
//   var totalMaxMarks = 300; 
//   return (sum / totalMaxMarks) * 100;
// }

// function mainFunction() {
//   var subject1Marks = 85;
//   var subject2Marks = 78;
//   var subject3Marks = 92;
 
//   var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);

//   const percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);

//   console.log(`Marks in Subject 1: ${subject1Marks}`);
//   console.log(`Marks in Subject 2: ${subject2Marks}`);
//   console.log(`Marks in Subject 3: ${subject3Marks}`);
//   console.log(`Average Marks: ${averageMarks.toFixed(2)}`); 
//   console.log(`Percentage Marks: ${percentageMarks.toFixed(2)}%`);
// }

// mainFunction();


// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// var myString = "hello world";
// var charToFind1 = "o";
// var charToFind2 = "z";

// console.log(`Index of '${charToFind1}': ${customIndexOf(myString, charToFind1)}`); 
// console.log(`Index of '${charToFind2}': ${customIndexOf(myString, charToFind2)}`); 


// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// function removeVowelsFromSentence() {
//   var sentence = prompt("Enter a sentence (max 25 characters):");

//   if (sentence === null) { // User clicked cancel
//     console.log("Operation cancelled.");
//     return;
//   }
//   if (sentence.length > 25) {
//     console.log("Error: Sentence exceeds 25 characters. Please try again.");
//     return;
//   }

//   var result = sentence.replace(/[aeiouAEIOU]/g, '');
//   console.log("Sentence without vowels:", result);
// }

// removeVowelsFromSentence();

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

// function countVowelSuccessions(text) {
//   var count = 0;
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length - 1; i++) {
//     switch (text[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         switch (text[i + 1]) {
//           case 'a':
//           case 'e':
//           case 'i':
//           case 'o':
//           case 'u':
//             count++;
//             break;
//         }
//         break;
//     }
//   }
//   return count;
// }


// var text = "The beautiful eagle ate an ice cream.";
// console.log("Number of vowel successions: ", countVowelSuccessions(text));


// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.


// function convertKmToMeters(distanceKm) {
//   var distanceMeters = distanceKm * 1000;
//   console.log(`Distance in meters: ${distanceMeters} m`);
// }

// function convertKmToFeet(distanceKm) {
//   var distanceFeet = distanceKm * 3280.84;
//   console.log(`Distance in feet: ${distanceFeet} ft`);
// }

// function convertKmToInches(distanceKm) {
//   var distanceInches = distanceKm * 39370.1;
//   console.log(`Distance in inches: ${distanceInches} in`);
// }

// function convertKmToCentimeters(distanceKm) {
//   var distanceCentimeters = distanceKm * 100000;
//   console.log(`Distance in centimeters: ${distanceCentimeters} cm`);
// }

// var distanceInKm = 10;

// if (typeof distanceInKm === 'number' && !isNaN(distanceInKm)) {
//   convertKmToMeters(distanceInKm);
//   convertKmToFeet(distanceInKm);
//   convertKmToInches(distanceInKm);
//   convertKmToCentimeters(distanceInKm);
// } else {
//   console.log("Invalid input. Please enter a numerical value for distance.");
// }

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//   var REGULAR_HOURS_LIMIT = 40;
//   var OVERTIME_RATE_PER_HOUR = 12.00; 

//   if (hoursWorked <= REGULAR_HOURS_LIMIT) {
//     return 0; 
//   } else {
//     var overtimeHours = hoursWorked - REGULAR_HOURS_LIMIT;
//     var overtimePay = overtimeHours * OVERTIME_RATE_PER_HOUR;
//     return overtimePay;
//   }
// }

// var employee1Hours = 45;
// var overtimePay1 = calculateOvertimePay(employee1Hours);
// console.log(`Employee 1 worked ${employee1Hours} hours. Overtime pay: Rs. ${overtimePay1.toFixed(2)}`);

// var employee2Hours = 38;
// var overtimePay2 = calculateOvertimePay(employee2Hours);
// console.log(`Employee 2 worked ${employee2Hours} hours. Overtime pay: Rs. ${overtimePay2.toFixed(2)}`);

// var employee3Hours = 50;
// var overtimePay3 = calculateOvertimePay(employee3Hours);
// console.log(`Employee 3 worked ${employee3Hours} hours. Overtime pay: Rs. ${overtimePay3.toFixed(2)}`);


// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

// var amount = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// var hundreds = Math.floor(amount / 100);
// var remainingAmount = amount % 100;

// var fifties = Math.floor(remainingAmount / 50);
// remainingAmount = remainingAmount % 50;

// var tens = Math.floor(remainingAmount / 10);

// alert(`Number of 100 denomination notes: ${hundreds}
// Number of 50 denomination notes: ${fifties}
// Number of 10 denomination notes:${tens}`);

