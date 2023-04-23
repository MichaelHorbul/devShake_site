function pressBurger() {
    console.log('burger');
}

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, w, h;
        /*get the width and height of the img element*/
        w = 0;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w) + "px";
        /*create slider:*/
        //        slider = document.createElement("DIV");
        slider = document.getElementById("slider");
        //        slider.setAttribute("class", "img-comp-slider");
        //        /*insert slider*/
        //        img.parentElement.insertBefore(slider, img);
        //        /*position the slider in the middle:*/
        //        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        //        slider.style.left = (w) - (slider.offsetWidth) + "px";

        var fixedBlock = document.getElementById("aboutus");

        fixedBlock.style.height = `${window.innerHeight * 2}px`;
        var initialPosition = fixedBlock.offsetTop;

        window.addEventListener("scroll", function () {
            if (window.pageYOffset > initialPosition) {

                slide(window.pageYOffset - initialPosition);

                fixedBlock.style.top = `0px`;
                fixedBlock.style.position = "sticky";

                if (window.pageYOffset > initialPosition + window.innerHeight) {

                    fixedBlock.style.top = `${initialPosition - window.innerHeight }px`;
                    fixedBlock.style.position = "relative";
                    slider.style.right = "0";
                    img.style.width = window.innerWidth + "px";
                }
            } else {

                fixedBlock.style.top = "";
                fixedBlock.style.position = "relative";
                slider.style.left = "0";
                img.style.width = "0";
            }
        });

        function slide(x) {
            if (x < initialPosition - window.innerHeight) {
                /*resize the image:*/
                console.log(x);
                img.style.width = x * (window.innerWidth / window.innerHeight) + "px";
                /*position the slider:*/
                slider.style.left = img.offsetWidth - (slider.offsetWidth * (x / window.innerHeight)) + "px";
            }
        }
    }
}

initComparisons();
