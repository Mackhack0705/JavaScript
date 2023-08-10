document.getElementsByClassName("btn")[0].onchange = function() {
    let first = document.getElementsByClassName("num")[0].value;
    let second = document.getElementsByClassName("num")[1].value;
    let result = 0;

    if(document.getElementsByClassName("btn")[0].value === "add") {
        result = parseInt(first) + parseInt(second);
        document.write(result);
    }
    else if(document.getElementsByClassName("btn")[0].value === "subtract") {
        result = parseInt(first) - parseInt(second);
        document.write(result);
    }
    else if(document.getElementsByClassName("btn")[0].value === "divided") {
        result = parseInt(first) / parseInt(second);
        document.write(result);
    }
    else if(document.getElementsByClassName("btn")[0].value === "multiply") {
        result = parseInt(first) * parseInt(second);
        document.write(result);
    }
}
// document.getElementById("btn").onchange = function() {
    
//     if(document.getElementById("btn").value === "red") {
//         document.body.style.backgroundColor = "red";
//     }
//     else if(document.getElementById("btn").value === "blue") {
//         document.body.style.backgroundColor = "blue";
//     }
//     else if(document.getElementById("btn").value === "green") {
//         document.body.style.backgroundColor = "green";
//     }
//     else if(document.getElementById("btn").value === "yellow") {
//         document.body.style.backgroundColor = "yellow";
//     }
// }
// document.getElementById("btn").onchange = function() {
    
//     if(document.getElementById("btn").value === "ankit") {
//         document.write("Ankit");
//     }
//     else if(document.getElementById("btn").value === "mohit") {
//         document.write("Mohit");
//     }
//     else if(document.getElementById("btn").value === "rahul") {
//         document.write("Rahul");
//     }
//     else if(document.getElementById("btn").value === "aakash") {
//         document.write("Aakash");
//     }
// }
