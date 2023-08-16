let a = [10,20,30,40,50,60,70,80];
// console.log(a.length);
// console.log(a.indexOf(50));
// a.push("aman");
// a.pop()
// a.pop()
// a.push(15)
// a.pop()
// a.push(80)
// a.unshift(50)
// a.shift()

// let x = a.shift();
// let y = a.pop();
// a.push(x);
// a.unshift(y);
// console.log(a.slice(2,5));
// console.log(a.splice(0,4));
// console.log(a);
// function prime() {
// let n = document.getElementById("inp").value;
// let arr = [];
// for(let i = 1; i <= n; i++) {
//     let cnt = 0;
//     for(let j = 1; j*j <= i; j++) {
//         if(i%j == 0)
//         {
//             cnt++;
//             if(i/j != j) {
//                 cnt++;
//             }
//         }
//     }
//     if(cnt == 2) arr.push(i);
// }

// console.log(arr);
// }

// let b = a.map(function(item) {
//     return item*2;
// })

// console.log(b);

a = a.map(function(item) {
   if(item >= 50) return item+" : pass";
   else return item+" : Fail"
})

console.log(a);
