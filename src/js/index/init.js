var lidlRTO;

$(document).ready (function () {

        e




    var phone = window.matchMedia("only screen and (max-width: 50em)");

    if (!phone.matches) { // If media query matches
        var wrapper = document.getElementById("wrapper");
        var waiting = false;

        wrapper.addEventListener('scroll', function(e){
            if (waiting) {
                return;
            }
            waiting = true;

            index.scrollOpacity(e.target);

            setTimeout(function () {
                waiting = false;
            }, 25);
        });
    }



    }

);


