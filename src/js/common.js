/**
 *
 * Wrapper function for certain small functions, mostly for event triggering
 *
 * @namespace common
 *
 */





(function (common,$,undefined) {
    var lidl = window.lidl;
    var debug = false;

    lidl.addDebugCategory(lidl.debugCategory.SCROLL);


    /*
    Private variables
     */





    /*
    private Modules
     */



    var FloatingButtonStateModule = (function() {
        var state = false;
        var error = false;
        var FloatingButtonState = {};
        var btnId = 'btn-jmptop';
        this.button = null;
        var lockState = false;


        var setUp = function (s) {
            this.button = document.getElementById(s);
            try {
                lidl.assertHTMLElement(this.button,debug);
            }
            catch (err) {
                console.warn("Creation of object " + s + " failed with error message: " + err);
                error = true;
            }
        };

        FloatingButtonState.setState = function(newstate) {
            if(lockState){return};
            if(this.button == null){
                setUp(btnId);
            }
            if(error){return false;}

            if(newstate) {

                $(button).css({'transform': 'translateY(-8em)'});
            }
            else {
                $(button).css({'transform': 'translateY(8em)'});
            }

            state = newstate;
        };

        FloatingButtonState.getState = function() {
            return state;
        };

        FloatingButtonState.fix = function(){
            if(this.button == null){
                setUp(btnId);
            }
            button.classList.add('btn-fixed');
            this.setState(true);
            lockState = true;

        };


        FloatingButtonState.unfix = function(){
            if(this.button == null){
                setUp(btnId);
            }
            button.classList.remove('btn-fixed');
            lockState = false;
        };

        return FloatingButtonState;
    }());


    var ScrollEventStateModule = (function(){
        var state = false;
        var ScrollState = {};

        ScrollState.setState = function (newstate) {

            if (newstate) {


                state = true;
            }

            state = newstate;
        };
        ScrollState.getState = function () {
            return state;
        };

        return ScrollState;

    }());

    common.Label = function() {


        var activeLabel = null;
        var id = 'fixedLabel';
        var items = [];
        var self = this;

        this.parent = document.getElementById(id);
        this.itemArray = $(this.parent).find('a');
        this.activeItem = 1;

        document.querySelectorAll('div.content-inner-part').forEach(
            function (item) {
            var waypoint = new Waypoint({
                element: item,
                handler: function(direction) {
                    lidl.debug('console.log("waypoint '+ this.element.id + ' reached")',lidl.debugCategory.SCROLL);
                    if(direction=='down'){
                        self.next(this.element.id);
                    }
                    else {
                        self.prev(this.element.id);
                    }

                },
                offset: '30%'
            })

        });

        return this;
    };

    common.Label.prototype.next = function (id) {
        this.itemArray.each(function(){
            this.classList.remove('active');
            if(this.getAttribute('href')=='#'+id){
                this.classList.add('active');
            }
        });
    };

    common.Label.prototype.prev = function (id) {
        var i;
        for(i=1;i<this.itemArray.length;i++){
            if(this.itemArray[i].getAttribute('href')=='#'+id){
                this.itemArray[i].classList.remove('active');
                this.itemArray[i-1].classList.add('active');
            }
        }
    };

    common.floatingButtonInit = function(){
        var s = "footer-mobile";
        var el = document.getElementById(s);
        try {
            lidl.assertHTMLElement(el,debug);
        }
        catch(err){
            console.warn("Creation of object " + s + " failed with error message: " + err);
            return false;
        }

        var waypoint = new Waypoint({
            element: el,
            handler: function(direction) {
                lidl.debug('console.log("waypoint '+ this.element.id + ' reached")',lidl.debugCategory.SCROLL);
                if(direction=='down'){
                    FloatingButtonStateModule.fix();
                }
                else {
                    FloatingButtonStateModule.unfix();
                }

            },
            offset: '100%'
        })



    };




    /*
    public functions
     */


    common.scrollEvent = function (optional){

        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if(FloatingButtonStateModule.getState()){
            if(scrollTop < 1*window.innerHeight){
                lidl.debug('console.log("DEBUG// " + "hiding jmpToTop-Btn")',lidl.debugCategory.SCROLL);
                FloatingButtonStateModule.setState(false);
            }

        }
        else {
            if(scrollTop > 1*window.innerHeight){
                lidl.debug('console.log("DEBUG// " + "showing jmpToTop-Btn")',lidl.debugCategory.SCROLL);
                FloatingButtonStateModule.setState(true);
            }
        }


    };

    /**
     *
     * Adjusts heights and margins to fit page to container
     *
     *
     *
     */
    common.adjust_page = function () {

        //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        //var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        /*var wrapper = document.getElementById("wrapper");
        lidl.assert(w,true);
        $(wrapper).css({
            "margin-top": navHeight
        });
        var c = document.getElementById("content-top");
        lidl.assert(c,true);
        $(c).css({

            "height": h - navHeight
        });
        */


    };

    var viewportDetector = function(){

        var el = document.getElementById('infobar2');
        try{
            assert(el,debug);
        }
        catch (err){
            console.alert("infobar not found, unregistering listener...");
            return false;

        }
        var options;

        if(!CounterStateModule.getState() && isVisible(el)){

            CounterStateModule.setState(true);

            $('.count').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }






        }
        return true;

    };

    common.preloader = function(){
        var plr = {};
        var self = document.getElementById("preloader");

        plr.hide = function(){
            self.classList.remove("preloader-active");
            self.classList.add("preloader-hidden");
        };

        return plr;


    };


    /*
    private functions
     */


    /**
     * Checks whether a DOM element is placed inside the current viewport
     *
     * @param element{object} DOM element to be checked
     *
     * @returns{boolean} true if element is in current viewport, else returns false
     *
     *
     */

    var isVisible = function (element){
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+100 && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    };

    common.smoothScrolling = function(){
        document.querySelectorAll('a[href^="#"]').forEach(
            function(item) {
                item.addEventListener('click', function (e) {
                e.preventDefault();
                var href = document.querySelector(this.getAttribute('href'));
                $('html, body').animate({
                    scrollTop:$(href).offset().top - document.getElementById('nav').clientHeight
                },'slow');

        });
    });
    };




    return common;






}(window.common = window.common || {}, jQuery));