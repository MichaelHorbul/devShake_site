


function topFunction() {
    document.body.scrollLeft = 0; // For Safari
    document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
  }


  
function openP(p) {
  var val = Number(p.dataset.value);
  if (val == 0){
    val = 1;
    p.dataset.value = val;
  }
  else if(val == 1){
    val = 0;
    p.dataset.value = val;
  }
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 0 && pItems[i].classList.contains('minimize')===false)
      {
        pItems[i].classList.add("minimize")
        setTimeout(addCol, 1000);
      }
      else if(deselectedValue == 1 && pItems[i].classList.contains('psel') === false)
      {
        pItems[i].classList.add("psel")
        setTimeout(openCol, 900);
      }
  }

  var screen = document.getElementsByClassName("screen")[0];
  screen.classList.add("blocked")
  setTimeout(addCloseBtn, 1500);
}

function addCloseBtn(){
  var closeBtn = document.getElementsByClassName("closebtn")[0];
  closeBtn.classList.add("closebtnshow");
}

function addCol(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 0)
      {
        pItems[i].classList.add("dissapear")
      }
    }
}

function openCol(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 1)
      {
        pItems[i].classList.add("pexp")
      }
    }
}

function closeP(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 1)
      {
        pItems[i].classList.remove("pexp")
        setTimeout(closeP2, 750);
        document.getElementsByClassName("closebtn")[0].classList.remove("closebtnshow");
      }
    }
}

function closeP2(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 1)
      {
        pItems[i].classList.remove("psel")
      }
      if(deselectedValue == 0)
      {
        setTimeout(closeP3, 480);
        setTimeout(closeP4, 500);
      }
    }
}

function closeP3(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 0)
      {
        pItems[i].classList.remove("dissapear")
      }
    }
}

function closeP4(){
  var pItems = document.getElementsByClassName('pitem');
  for (var i = 0; i < pItems.length; i++){
      var deselectedValue = Number(pItems[i].dataset.value);
      if(deselectedValue == 0)
      {
        pItems[i].classList.remove("minimize")
        var screen = document.getElementsByClassName("screen")[0];
        screen.classList.remove("blocked");
      }
      pItems[i].dataset.value = 0;
    }
}

window.onload = topFunction();

