window.addEventListener('mousemove', e => {
    console.log(e.clientX + " " + e.clientY)
    document.body.style.cssText += `--mousePositionX:${e.clientX/100}px; --mousePositionY:${e.clientY/100}px; `

});

/* Nav */


var x = document.getElementById("Links1");
var l = document.getElementById("lang");

function myFunction() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else if(l.style.display = "block"){
	l.style.display = "none";
    x.style.display = "block";
  }
  else{
  x.style.display = "block";
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