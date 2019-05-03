var lidlRTO;

$(document).ready (function () {

        var Hammer = window.Hammer;


        var token = lidlRTO.objectManager.createNewObjectToken();
        const imgBox01 = new lidl.Imagebox("lidl-imagebox01", token);
        lidlRTO.objectManager.addObject(imgBox01, token);

        token = lidlRTO.objectManager.createNewObjectToken();
        const imgBox02 = new lidl.Imagebox("lidl-imagebox02", token);
        lidlRTO.objectManager.addObject(imgBox02, token);


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


