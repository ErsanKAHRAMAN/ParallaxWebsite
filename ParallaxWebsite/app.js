let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_Behind = document.getElementById("behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_Front = document.getElementById("front");
let header = document.getElementById("header");
let body = document.getElementById("body");
window.addEventListener("scroll",function(){
    let value = window.scrollY;
    
    
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.75 + 'px';
    mountains_Behind.style.top = value * 0.5 + 'px';
    mountains_Front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3.0 + 'px';
    text.style.marginTop = value * 1.0 + 'px';
    btn.style.marginTop = value * 1.0 + 'px';
    header.style.marginTop = value *0.5+'px';
    
    

   
})