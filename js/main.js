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
    if (l.style.display === "flex") {
        l.style.display = "none";
    } else if (x.style.display = "flex") {
        x.style.display = "none";
        l.style.display = "flex";
    } else {
        l.style.display = "flex";
    }
};


