var cnt = prompt("Enter a number");
var ld, i = 0;
// var i = 1;
// while(i <= cnt) {
//     if(i == cnt/2) { 
//         i++;
//     }
//     console.log(i);
//     i++;
// }
// while(i <= cnt) {
//     if(i%2 == 0)
//     {
//         console.log(i+" Even");
//     }
//     else {
//         console.log(i+" Odd");
//     }
//     i++;
// }
while(cnt > 0) {
    ld = parseInt(cnt%10);
    cnt = parseInt(cnt/10);
    i++
}


console.log(i)


// document.getElementById("btn").onclick = function() {
//     let a = document.getElementById("inp").value;
//     i = 1;
//     while(i <= a) {
//         console.log(i);
//         i++;
//     }
// }