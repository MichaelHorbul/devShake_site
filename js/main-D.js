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


  
var x;
var $cards = $(".card");
var $style = $(".hover");

$cards
  .on("mousemove touchmove", function(e) { 
    // normalise touch/mouse
    var pos = [e.offsetX,e.offsetY];
    e.preventDefault();
    if ( e.type === "touchmove" ) {
      pos = [ e.touches[0].clientX, e.touches[0].clientY ];
    }
    var $card = $(this);
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.height();
    var w = $card.width();
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    var pa = (50-px)+(50-py);
    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var px_spark = (50+(px - 50)/7);
    var py_spark = (50+(py - 50)/7);
    var p_opc = 20+(Math.abs(pa)*1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;
    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}%;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    var opc = `opacity: ${p_opc/100};`
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    // need to use a <style> tag for psuedo elements
    var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
    // set / apply css class and style
    $cards.removeClass("active");
    $card.removeClass("animated");
    $card.attr( "style", tf );
    $style.html(style);
    if ( e.type === "touchmove" ) {
      return false; 
    }
    clearTimeout(x);
  }).on("mouseout touchend touchcancel", function() {
    // remove css, apply custom animation on end
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");
  });