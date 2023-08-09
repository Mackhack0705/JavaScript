var a = 10;
var b = 20;
console.log(a);

// let x = 50;
// let x = 80; give an error
// var is global variabale and let const are local variabale
// x = 80;
// console.log(x);

const pi = 3.141;
console.log(pi);

hello(2);

function hello(i) {
  if (i == 2) {
    var a = "mohit";
    console.log(a);
  }
}

// console.log(y);
// var y = 20;

// console.log(z);
// let z = 5;

// const s = 10;
// console.log(s);

// var b = true;
// console.log(typeof(b));

// console.log(5+6);
// console.log(5-7);
// console.log(5*6);
// console.log(5/6);
// console.log(5%6);

// console.log(5>6);
// console.log(4<=6);
// console.log(5=='5');
// console.log(5==='5');
// console.log('A'>'B');
// console.log('a'<'b');
// console.log(5!=6);
// console.log(7<=7);

// console.log(7>8 && 7<9);
// console.log(5>8 || 9>8);

// let age = 19;

// if(age>=10 && age < 18) {
//     console.log("you are eligible for baby vote");
// }
// else if(age >= 18){
//     console.log("you are eligible for full vote");
// }
// else {
//     console.log("you can't vote");
// }



// 1.write a program to find maximum between two numbers

// var x = prompt("Enter one number");
// var y = prompt("Enter second number");

// if(x>y) {
//     alert("x is greater than y");
// }
// else {
//     alert("y is greater than x");
// }

// 2.write a program to find maximum between three numbers

// var x = prompt("Enter first number");
// var y = prompt("Enter second number");
// var z = prompt("Enter third number");

// if(x > y) {
//     if(x > z) {
//         alert("x is greater than y and z");
//     }
//     else {
//         alert("z is greater than x and y");
//     }
// }
// else {
//     if(y > z) {
//         alert("y is greater than x and z");
//     }
//     else {
//         alert("z is greater than x and y");
//     }
// }

// 3. write a program to check whether a number is negative, posititve or zero

// var num = prompt("Enter a number");

// if(num < 0) {
//     alert("negative number");
// }
// else if(num > 0) {
//     alert("positive number");
// }
// else {
//     alert("zero number");
// }

// 4. write a program to check whether a number is divisible by 5 and 11 or not

// var num = prompt("Enter a number");

// if((num % 5) == 0 && (num % 11) == 0) {
//     alert("Number is divisible by 5 and 11");
// }
// else {
//     alert("Number is not divisible by 5 and 11");
// }

// 5. write a program to check whether a number is even or odd

// var num = prompt("Enter a number");

// if(num%2 == 0) {
//     alert("Even number");
// }
// else {
//     alert("Odd number");
// }

// 6. write a program to check whether a year is leap year or not

// var year = prompt("Enter a year");

// if(year % 100 == 0 && year % 4 == 0) {
//         alert("It is a leap century year");
// }
// else if(year % 4 == 0) {
//         alert("It is a leap year");
// }
// else {
//     alert("It is a normal year");
// }

// 7. write a program to check whether a character is alphabet or not

// var character = prompt("Enter a character");

// if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
//     alert("It is an alphabet");
// }
// else {
//     alert("It is not a alphabet");
// }

// 8. write a program to take any alphabet or check whether a it a vowel or consonant

// var alph = prompt("Enter any alphabet");

// if(alph == 'a' || alph == 'e' || alph == 'i' || alph == 'o' || alph == 'u' || alph == 'A' || alph == 'E' || alph == 'I' || alph == 'O' || alph == 'U') {
//     alert("It is a vowel");
// }
// else {
//     alert("It is a consonant")
// }

// 9. write a program to input any character and check whether it is alphabet, digit or special character

// let c = prompt("Enter a value");

// if(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
//     console.log("you entered a character");
// }
// else if(c >= 0 || c < 0)
// {
//     console.log("you entered a number");
// }
// else {
//     console.log("you entered a special value");
// }

// 10. write a program to check whether a character is uppercase or lowercase alphabet

// let char = prompt("Enter a character");

// if(char >= 'a' && char <= 'z') {
//   alert("Character is a lowercase alphabet");
// }
// else if(char >= 'A' && char <= 'Z') {
//   alert("Charater is a uppercase alphabet");
// }
// else {
//   alert("special character");
// }

// 11. write a program to input week number and print week day

// var weekNum = prompt("Enter a week number");

// if(weekNum == 1) {
//   alert("Monday");
// }
// else if(weekNum == 2) {
//   alert("Tuesday");
// }
// else if(weekNum == 3) {
//   alert("Wednesday");
// }
// else if(weekNum == 4) {
//   alert("Thursday");
// }
// else if(weekNum == 5) {
//   alert("Friday");
// }
// else if(weekNum == 6) {
//   alert("Saturday");
// }
// else {
//   alert("Sunday");
// }

