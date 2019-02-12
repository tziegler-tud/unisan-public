var lidlRTO;

$(document).ready (function () {

    console.log("js active, removing noscript fallback");
    $("body").removeClass("no-js");



    lidlRTO = new lidl.Main();

    lidlRTO.addManager(new lidl.ObjectManager(),true);

    lidl.addDebugCategory(lidl.debugCategory.FULL);


    var token = lidlRTO.objectManager.createNewObjectToken();
    var nav = new window.lidl.nav.Nav(token,"nav","nav-static","menu");
    lidlRTO.objectManager.addObject(nav,token);


    common.smoothScrolling();
    common.floatingButtonInit();











    }
);

$(window).on('load',function() {
    console.log("finished loading, hiding preloader");
    var plr = common.preloader();
    plr.hide();



});

$(window).on('resize',function(){

});

var waiting = false;

window.addEventListener('scroll', function() {

    if (waiting) {
        return;
    }
    waiting = true;

    common.scrollEvent();


    setTimeout(function () {
        waiting = false;
    }, 100);

});





