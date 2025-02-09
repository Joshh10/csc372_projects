const text = "Rebekah Photography";
const text2 = "Rebekah Lawson";
let index = 0;
const speed = 100; 
let index2 = 0;
const speed2 = 150;

function typeName() {
    if(index < text.length){
        document.querySelector('.title .name strong').textContent += text.charAt(index);
        index++;
        setTimeout(typeName, speed);
    }
}

function typeSubname(){
    
    if (index2 < text2.length){
        document.querySelector('.sub-name sub').textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeSubname, speed2);
    }
}
document.addEventListener("DOMContentLoaded", typeName);
document.addEventListener("DOMContentLoaded", typeSubname);

let button = document.getElementById("btn-id");
let section = document.querySelector(".section-one");


button.addEventListener("click", function(){
   
    section.style.backgroundImage = 'url(../images/beach.jpg)';

});

let button2 = document.getElementById("btn2-id");
let section2 = document.querySelector(".section-one");


button2.addEventListener("click", function(){
   
    section2.style.backgroundImage = 'url(../images/lights.jpg)';

});



