var a = 10;
var b = 20;
console.log(a);

let x = 50;
// let x = 80; give an error
// var is global variabale and let const are local variabale
x = 80;
console.log(x);

const pi = 3.141;
console.log(pi)

hello(2)

function hello(i) {
    if(i == 2) {
        var a = 'mohit'
        console.log(a)
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

// let num = prompt("Enter a number");

// if(num < 0) {
//     console.log("negative number");
// }
// else {
//     console.log("positive number");
// }

let c = prompt("Enter a value");

if(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
    console.log("you entered a character");
}
else if(c >= 0 || c < 0)
{
    console.log("you entered a number");
}
else {
    console.log("you entered a special value");
}