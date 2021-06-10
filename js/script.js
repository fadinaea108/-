const body = document.querySelector("body");


console.log(typeof body);

window.addEventListener("scroll", function() {
  checkScroll();
});

document.addEventListener("DOMContentLoaded", function() {
  checkScroll();
});

function checkScroll() {
  let scrollPos = window.scrollY;

  if(scrollPos > 0) {
  body.classList.add('color');
} else {
  body.classList.remove('color');
}
}


var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
