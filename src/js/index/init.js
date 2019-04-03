var lidlRTO;

$(document).ready (function () {

        var Hammer = window.Hammer;


        var token = lidlRTO.objectManager.createNewObjectToken();
        var imgBox01 = new lidl.Imagebox("lidl-imagebox01", token);
        lidlRTO.objectManager.addObject(imgBox01, token);


        var mc = new Hammer.Manager(imgBox01.getContainerDomElement());
        mc.add(new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL, threshold: 30}))
        mc.on('swipeleft', function () {
            console.log("swipe left detected");
            imgBox01.nextImage();
        });
        mc.on('swiperight', function () {
            console.log("swipe right detected");
            imgBox01.prevImage();
        });



    const phone = window.matchMedia("only screen and (max-width: 50em)");

    if (!phone.matches) { // If media query matches
        const wrapper = document.getElementById("wrapper");
        wrapper.addEventListener('scroll', index.scrollOpacity);
    }



    }

);


