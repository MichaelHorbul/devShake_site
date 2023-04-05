function almightyLasor(){
    setTimeout(laserFirin, 1000);
    setTimeout(addDrinkAni, 1300);
    setTimeout(laserFirin, 4000);
}

function laserFirin(){
    var current = document.getElementsByClassName("active")[1];
    var imafirinmahlasah = current.getElementsByClassName("laser")[0];
    imafirinmahlasah.classList.toggle("laserfirin");
}

function addDrinkAni(){
    var current = document.getElementsByClassName("active")[1];
    var prev = document.getElementsByClassName("active")[1].previousElementSibling.getElementsByClassName("drink")[0];
    var drink1 = current.getElementsByClassName("drink")[0];
    prev.classList.remove("test");
    prev.classList.remove("test2");
    drink1.classList.add("test");
    setTimeout(addDrinkAni2, 1000);
}

function addDrinkAni2(){
    var current = document.getElementsByClassName("active")[1];
    var drink2 = current.getElementsByClassName("drink2")[0];
    drink2.classList.add("test2");
}


function topFunction() {
    document.body.scrollLeft = 0; // For Safari
    document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
  }

  window.onload = topFunction();