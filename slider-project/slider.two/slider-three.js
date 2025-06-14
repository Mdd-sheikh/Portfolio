let value = 0;
function slide_right(){
    let a = document.getElementById("slider-img");
    value = value +1;
    a.style.transform = `translateX(${-value * 1500}px)`;
}
function slide_left(){
    let a = document.getElementById("slider-img");
    value = value -1;
    a.style.transform = `translateX(${-value * 1500}px)`;
}