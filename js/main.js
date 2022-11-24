window.addEventListener('mousemove', e => {
    // console.log(e.clientX + " " + e.clientY)
    document.body.style.cssText += `--mousePositionX:${e.clientX/100}px; --mousePositionY:${e.clientY/100}px; `

});

/* Nav */


var x = document.getElementById("Links1"); //название переменных. сам таким грешу но всё же
var l = document.getElementById("lang");

function myFunction() {
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else if (l.style.display = "flex") {
        l.style.display = "none";
        x.style.display = "flex";
    } else {
        x.style.display = "flex";
    }
};


function myFunction2() {
  if (l.style.display === "block") {
    l.style.display = "none";
  } else if(x.style.display = "block"){
	x.style.display = "none";
    l.style.display = "block";
  }
  else{
  l.style.display = "block";
}
};

/* Gallery */

var t = document.getElementsByClassName("item");

function plusDivs(n) {
  showDivs(slideIndex += n);
}
var slideIndex = 1;
showDivs(slideIndex)

function showDivs(n) {
  var i;
  if (n > t.length) {slideIndex = 1}
  if (n < 1) {slideIndex = t.length}
  
  
  function hide(){
  for (i = 0; i < t.length; i++) {
    
    t[i].classList.add('hidden');
    t[i].classList.add('visuallyhidden');
  }
}

setTimeout(hide(),500);

  t[slideIndex-1].style.opacity = 1; 
  t[slideIndex-1].classList.remove('hidden');
  setTimeout(function() { t[slideIndex-1].classList.remove('visuallyhidden'); }, 500);
}
    if (l.style.display === "flex") {
        l.style.display = "none";
    } else if (x.style.display = "flex") {
        x.style.display = "none";
        l.style.display = "flex";
    } else {
        l.style.display = "flex";
    }
};


