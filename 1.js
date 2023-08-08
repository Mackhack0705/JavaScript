console.log("welcome in javaScript !!!");
alert('shubham');
document.write('shubham');

document.getElementById('b').onclick=function() {
    document.getElementById('m1').innerHTML="rajesh"
    document.getElementById('m1').style.color= "red";
    document.getElementById('b').textContent="clicked";
}