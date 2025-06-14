let value = 0;
function next() {
    let a = document.getElementById("slider");
    value = value + 1;
    a.style.transform = `translateX(${-value * 1500}px)`;

 }
 function prev(){
    let a = document.getElementById("slider");
    value = value - 1;
    a.style.transform = `translateX(${-value * 1500}px)`;
 }