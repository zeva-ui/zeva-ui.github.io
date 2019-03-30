//menu
$("#close").click(function(){
    hideMenu();
});
$("#open").click(function(){
    $("#menu").css("display","flex");
    $("#menu").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#menu").removeClass("animated slideInLeft");
    },800);
});
function hideMenu(){
    $("#menu").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#menu").css("display","none");
        $("#menu").removeClass("animated slideOutLeft");
    },800);
}

//start
$("#panel_start").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html");
});
$("#panel_li_introduction").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#start");
});
$("#panel_li_content").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#content");
});
$("#panel_li_responsive").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#responsive");
});
$("#panel_li_usage").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#usage");
});
$("#panel_li_theming").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#Theming");
});

//styling
$("#panel_styling").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html");
});
$("#panel_li_typography").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#typography");
});
$("#panel_li_colors").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#colors");
});
$("#panel_li_font").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#font");
});

//components
$("#panel_components").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html");
});
$("#panel_li_buttons").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#buttons");
});
$("#panel_li_tables").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#tables");
});
$("#panel_li_forms").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#forms");
});
$("#panel_li_helpers").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#helpers");
});

//Contributing
$("#panel_contributing").click(function(){
    $("#right_panel").attr("src","../pages/contributing/index.html");
});

//for phone 
//start
$("#panel_start_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html");
    hideMenu();
});
$("#panel_li_introduction_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#start");
    hideMenu();
});
$("#panel_li_content_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#content");
    hideMenu();
});
$("#panel_li_responsive_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#responsive");
    hideMenu();
});
$("#panel_li_usage_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#usage");
    hideMenu();
});
$("#panel_li_theming_alt").click(function(){
    $("#right_panel").attr("src","../pages/start/index.html#Theming");
    hideMenu();
});

//styling
$("#panel_styling_alt").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html");
    hideMenu();
});
$("#panel_li_typography_alt").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#typography");
    hideMenu();
});
$("#panel_li_colors_alt").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#colors");
    hideMenu();
});
$("#panel_li_font_alt").click(function(){
    $("#right_panel").attr("src","../pages/styling/index.html#font");
    hideMenu();
});

//components
$("#panel_components_alt").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html");
    hideMenu();
});
$("#panel_li_buttons_alt").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#buttons");
    hideMenu();
});
$("#panel_li_tables_alt").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#tables");
    hideMenu();
});
$("#panel_li_forms_alt").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#forms");
    hideMenu();
});
$("#panel_li_helpers_alt").click(function(){
    $("#right_panel").attr("src","../pages/components/index.html#helpers");
    hideMenu();
});

//Contributing
$("#panel_contributing_alt").click(function(){
    $("#right_panel").attr("src","../pages/contributing/index.html");
    hideMenu();
});
