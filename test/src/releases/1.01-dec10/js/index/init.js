var lidlRTO;

var $ = $;

$(document).ready (function () {

    var Hammer = window.Hammer;


    var token = lidlRTO.objectManager.createNewObjectToken();
    const imgBox01 = new lidl.Imagebox("lidl-imagebox01", token, {});
    lidlRTO.objectManager.addObject(imgBox01, token);

    var mc = new Hammer.Manager(imgBox01.getContainerDomElement());
    mc.add(new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL, threshold: 30}));
    mc.on('swipeleft', function () {
        console.log("swipe left detected");
        imgBox01.nextImage();
    });
    mc.on('swiperight', function () {
        console.log("swipe right detected");
        imgBox01.prevImage();
    });


    /*
    impress-slider
     */

    var token2 = lidlRTO.objectManager.createNewObjectToken();
    var args = {
        layout: 0,
        startIndex: 0,
        classes: "impress-slider",
        enableRepeat: true,
        animationDelay: 500,
        callbacks: {
            onImageChange: function(res){
                res.currentImg.classList.remove("transition-in");
                res.currentImg.classList.add("transition-out");
                res.nextImg.classList.remove("transition-out");
                res.nextImg.classList.add("transition-in");
            },
        }
    };

    const imgBox02 = new lidl.Imagebox("impress-slider01", token2, args);
    lidlRTO.objectManager.addObject(imgBox02, token2);

    $("#impress-slider01 .content-link").on("click", function(e){
        e.preventDefault();
        imgBox02.nextImage()
    });

    (function(){
        var nav = imgBox02.navigation;
        if(nav) {
            nav.append()
        }
    }());




    var mc2 = new Hammer.Manager(imgBox02.getContainerDomElement());
    mc2.add(new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL, threshold: 30}));
    mc2.on('swipeleft', function () {
        console.log("swipe left detected");
        imgBox02.nextImage();
    });
    mc2.on('swiperight', function () {
        console.log("swipe right detected");
        imgBox02.prevImage();
    });







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


