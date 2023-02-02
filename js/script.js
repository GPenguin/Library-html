$(document).ready(function(){
    var menu = $(".inmenu");
    var sidemenu = $(".sidemenu");
    var line = $(".line");
    var menuopen;
    function openmenu() {
        menu.css("left","0px");
        line.css("blackground","black");
        menuopen = true;
    }

    function menuclose() {
        menu.css("left","-320px");
        line.css("blackground","#000");
        menuopen = false;
    }

    function togglemenu(){
        if(menuopen){
            menuclose();
        }
        else{
            openmenu();
        }
    }

    sidemenu.on({
        mouseenter: function(){
            openmenu();
        }
    });

    menu.on({
        mouseleave: function(){
            menuclose();
        }
    });

    sidemenu.on({
        click:function(){
            togglemenu();
        }
    });
    
})  