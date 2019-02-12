/*
this is rather experimental.
 */


/* dev setup */

function setUpDevArea() {
    $(".controlgroup").controlgroup();

    $("#themeToggle2").button('disable');



    //$("#divToggle1").checkboxradio("disable");

    $("#divToggle1").bind('change',function () {
        showDivBoundaries(true);
    });

    $("#divToggle2").bind('change',function () {
        showDivBoundaries(false);
    });

    $("#themeToggle1").bind('change',function () {
        setThemeMidnight();
    });

    $("#themeToggle2").bind('change', function(){
        setThemeBlizzard();
    });

    setThemeMidnight();
/*
    $("#colSubButton1").bind('click', function(){
        changeLessVar('main',document.getElementById('colorInput1a').value,null);
    });

    $("#colSubButton2").bind('click', function(){
        changeLessVar('nav',document.getElementById('colorInput2a').value,document.getElementById('colorInput2b').value);
    });
    $("#colSubButton3").bind('click', function(){
        changeLessVar('body',document.getElementById('colorInput3a').value,document.getElementById('colorInput3b').value);
    });
    $("#colSubButton4").bind('click', function(){
        //changeLessVar('infobar',document.getElementById('colorInput4a').value,document.getElementById('colorInput4b').value);

        var colarray = [];
        colarray[0] = document.getElementById('colorInput1a').value;
        colarray[1] = document.getElementById('colorInput2a').value;
        colarray[2] = document.getElementById('colorInput2b').value;
        colarray[3] = document.getElementById('colorInput3a').value;
        colarray[4] = document.getElementById('colorInput3b').value;
        colarray[5] = document.getElementById('colorInput4a').value;
        colarray[6] = document.getElementById('colorInput4b').value;

        changeLessVar('all',colarray);
    });





    setTimeout(function(){
        getCurrentLessColorValues();
    },1000);

    $(".colorInp").on("input", function(){

        paintThumbs(this);

    });*/
}


function showDivBoundaries(state){
    if (state){
        $("div").addClass("show-boundaries");
    }
    else {
        $("div").removeClass("show-boundaries");
    }
}

function setThemeBlizzard() {

    //console.log("active theme: blizzard");
    console.log("active theme: midnight-blue");
    //$("div").addClass("theme-blizzard");
    $("div").addClass("theme-midnight-blue");
    $("div").removeClass("theme-midnight");
    //$("body").addClass("theme-blizzard");
    $("body").addClass("theme-midnight-blue");
    $("body").removeClass("theme-midnight");
    //document.getElementById('logo').src="images/kompaktlogo_transparent_small.png";
}

function setThemeMidnight() {
    console.log("active theme: midnight");
    $("div").addClass("theme-midnight");
    //$("div").removeClass("theme-blizzard");
    $("div").removeClass("theme-midnight-blue");
    $("body").addClass("theme-midnight");
    //$("body").removeClass("theme-blizzard");
    $("body").removeClass("theme-midnight-blue");
    document.getElementById('logo').src="images/kompaktlogo_transparent_invertiert_small.png";
}



/* helpers */


function observer(){


}

/* actions */



function setTheme(themename) {



}

less={env: 'development'};

function changeLessVar(variableName,colarray){

    var colorstringarray = [];

    colorstringarray = colarray;


    colorstringarray[1] = (typeof colorstringarray[1] === 'undefined') ? '#000000' : colorstringarray[1];
    colorstringarray[2] = (typeof colorstringarray[2] === 'undefined') ? '#000000' : colorstringarray[2];

    console.log("setting " + variableName + "to " + colorstringarray);

    switch (variableName) {

        case 'main':

            console.log("cp1");
            less.modifyVars({

                '@akzent-color': '#' + colorstringarray[0]
            });
            break;

        case 'nav':
            console.log("cp2");
            less.modifyVars({

                '@nav-bg-color': '#' + colorstringarray[0],
                '@nav-font-color': '#' + colorstringarray[1]
            });
            break;

        case 'body':
            console.log("cp3");
            less.modifyVars({

                '@content-bg-color': '#' + colorstringarray[0],
                '@content-font-color': '#' + colorstringarray[1],
                'overlay-font-color': '#' + colorstringarray[2]
            });
            break;

        case 'infobar':
            console.log("cp5");

            less.modifyVars({

                '@inputbar-bg-color': '#' + colorstringarray[0],
                '@inputbar-font-color': '#' + colorstringarray[1]
            });
            break;

        case 'all':
            less.modifyVars({
                '@akzent-color': '#' + colorstringarray[0],
                '@nav-bg-color': '#' + colorstringarray[1],
                '@nav-font-color': '#' + colorstringarray[2],
                '@nav-hover-color': '#' + colorstringarray[0],
                '@content-bg-color': '#' + colorstringarray[3],
                '@content-font-color': '#' + colorstringarray[4],
                'overlay-font-color': '#' + colorstringarray[0],
                '@infobar-bg-color': '#' + colorstringarray[5],
                '@infobar-font-color': '#' + colorstringarray[6]
            });
    }
}

function getCurrentLessColorValues(){
    /*

@akzent-color: #ff9900; //1a

@nav-bg-color: #464646; //2a
@nav-font-color: #cbcbcb;; //2b
@nav-hover-color: @akzent-color;

@content-bg-color: #fffcf5; //3a
@content-font-color: #333333; //3b

@imageoverlay-font-color: #FFFFFF;
@imageoverlay-hightlight-color: @akzent-color;

@infobar-bg-color: #fffcf5; //4a
@infobar-font-color: @akzent-color; //4b
     */


/*

    document.getElementById('colorInput1a').value = translateToHex(getCssStyleValue('nav','border-bottom-color'));
    document.getElementById('colorInput2a').value = translateToHex(getCssStyleValue('nav','background-color'));
    document.getElementById('colorInput2b').value = translateToHex(getCssStyleValue('nav','color'));
    document.getElementById('colorInput3a').value = translateToHex(getCssStyleValue('body','background-color'));
    document.getElementById('colorInput3b').value = translateToHex(getCssStyleValue('sec1','color'));
    document.getElementById('colorInput4a').value = translateToHex(getCssStyleValue('info2.1','background-color'));
    document.getElementById('colorInput4b').value = translateToHex(getCssStyleValue('info2.1','color'));

    $(".colorInp").each(function (){paintThumbs(this)});

*/

}

function getCssStyleValue(id,property){
    var el = document.getElementById(id);
    var style = window.getComputedStyle(el);
    return style.getPropertyValue(property);

}

function translateToHex(string){

    var r = string.substr(string.indexOf('(')+1,3);
    var g = string.substr(string.indexOf(',')+2,3);
    var b = string.substr(string.lastIndexOf(',')+2,3);

    console.log(r+g+b);

    if(r.indexOf(',')!==-1){
        r=r.substr(0,r.indexOf(','));
    }
    if(g.indexOf(',')!==-1){
        g=g.substr(0,g.indexOf(','));
    }
    if(b.indexOf(')')!==-1){
        b =b.substr(0,b.indexOf(')'));
    }

    console.log("r: " + r + "g: " +g+ "b: " + b);


    return toHex(r) +    toHex(g) +    toHex(b);



}

function toHex(string){
    var res =  Number(string).toString(16);
    if(Number(string)<17){res = 0+res}
    return res;
}

function paintThumbs(el){




    $("#" + el.id + "Thumb").css({
        "background-color": "#" + el.value
    });

}

function loadColorSettings(){

    var e = document.getElementById("loadCol");
    var id = e.options[e.selectedIndex].id;
    var name = e.options[e.selectedIndex].name;

    console.log("id: "+id + "  name: " + name + "selected");


    var col1 = e.options[e.selectedIndex].dataset.col1;
    var col2 = e.options[e.selectedIndex].dataset.col2;
    var col3 = e.options[e.selectedIndex].dataset.col3;
    var col4 = e.options[e.selectedIndex].dataset.col4;
    var col5 = e.options[e.selectedIndex].dataset.col5;
    var col6 = e.options[e.selectedIndex].dataset.col6;
    var col7 = e.options[e.selectedIndex].dataset.col7;

    var colarray = [
        col1,col2,col3,col4,col5,col6,col7
    ];


    changeLessVar('all',colarray);
    window.setTimeout(getCurrentLessColorValues,500);




}