function myFunction() { var x,y;
x=5435;y=4563;
z=x+y;
document.getElementById("demo").innerHTML = "5435+4563="+z;
}function myFunction2() { document.getElementById("demo").innerHTML = "5435+4563 =" ;
}
document.getElementById('color').onclick = changeColor; var currentColor = "red";
function changeColor() {
if(currentColor == "red"){ document.body.style.color = "green"; currentColor = "green";
} else {
document.body.style.color = "red"; currentColor = "red";} }