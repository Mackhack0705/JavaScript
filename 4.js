// document.getElementsByClassName("btn")[0].onclick = function() {
//     let a = document.getElementsByClassName("inp");

//     // for(let i = 0; i < a.length; i++) {
//     //     console.log(a[i].value);
//     // }
//     // for(let i of a) {
//     //     console.log(i.value);
//     // }
//     for(let i in a) {
//         console.log(a[i].value);
//     }
// }

// document.querySelector("button").onclick = function() {
//     let a = document.querySelectorAll("input");
//     console.log(a[0].value);
// }
 
    let n = document.querySelectorAll(".box");
    for(let i = 0; i < n.length; i++) {
        document.querySelectorAll(".box")[i].onmouseover = function() {
            document.querySelector(".box").style.backgroundColor="rgb(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))"
    };
}
