var colors = ["#FF3E30", "#F7B527", "#179C52"]
    $('.dropdown-menu').find('a').each(function(x, index){
        var navlink = $(this);
        var color = colors[(x%(colors.length))];
        var ci = navlink.css('backgroundColor');
    
        navlink.hover(function() {
            $(this).css("background-color",color)
        }).mouseout(function(){
                $(this).css({"background-color":"#ffffff",});
        });;    
    });