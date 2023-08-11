// prime = (a) => {
//     var cnt = 0;
//     for(let i = 1; i <= a; i++) {
//         if(a%i== 0) {
//             cnt++;
//         }
//     }
//     if(cnt === 2) 
//     { 
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }
// let a = prime(12);
// console.log(a);

var a = [10, 20, 3,'mohit'];
for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

for(let i of a) {
    console.log(i);
}


for(let i in a) {
    console.log(i);
}

a.forEach(function(item) {
    console.log(item);
})

// preventdefault ==> for hold the screen

//append and create element