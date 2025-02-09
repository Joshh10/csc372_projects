const text = "Rebekah Photography"; //main heading to input within h1 tag in name class
const text2 = "Rebekah Lawson"; //sub-text to put underneath main heading
//defines startng index for each text
let index = 0;
let index2 = 0;
//defines speed at which the text is appearing
const speed = 100; 
const speed2 = 150;


//function for main-heading text that outputs each index of text onto website by getting adding that index to the strong tag in html
function typeName() {
    if(index < text.length){
        document.querySelector('.title .name strong').textContent += text.charAt(index);
        index++;
        setTimeout(typeName, speed);
    }
}
//function for sub-heading text that outputs each index of text onto website by getting adding that index to the sub tag in html
function typeSubname(){
    
    if (index2 < text2.length){
        document.querySelector('.sub-name sub').textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeSubname, speed2);
    }
}

//calls each function 
document.addEventListener("DOMContentLoaded", typeName);
document.addEventListener("DOMContentLoaded", typeSubname);


//sets variables 
let button = document.getElementById("btn-id");
let section = document.querySelector(".section-one");

//button that when its clicked, changes css of the img stored in section
button.addEventListener("click", function(){
   
    section.style.backgroundImage = 'url(../images/beach.jpg)';

});

//sets varibles and defines them
let button2 = document.getElementById("btn2-id");
let section2 = document.querySelector(".section-one");

//button2 that when its clicked, changes css of the img stored in section2
button2.addEventListener("click", function(){
   
    section2.style.backgroundImage = 'url(../images/lights.jpg)';

});



