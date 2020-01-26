$(function(){
    var card = $(".card");
    card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
        
        var rY = map(x, 0, $(this).width(), -25, 25);
        var rX = map(y, 0, $(this).height(), -25, 25);
    
        $(this).children(".image").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
        // $(this).children(".image").css("transform", "translateY(" + rY + "px)" + " " + "translateX(" + -rX + "px)");
    });
    
    card.on('mouseenter', function () {
        $(this).children(".image").css({
            transition: "all " + 0.3 + "s" + " linear",
        });

    });

    card.on('mouseleave', function () {
        $(this).children(".image").css({
            transition: "all " + 0.2 + "s" + " linear",
        });

        $(this).children(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
        // $(this).children(".image").css("transform", "translateY(" + 0 + "px)" + " " + "translateX(" + 0 + "px)");
    });
        
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
});



$(function(){
    var s_card = $(".service_box");
    s_card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
        
        var rY = map(x, 0, $(this).width(), -15, 15);
        var rX = map(y, 0, $(this).height(), -15, 15);
    
        // $(this).css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
        $(this).css("transform", "translateY(" + rY + "px)" + " " + "translateX(" + -rX + "px)");
    });
    
    s_card.on('mouseenter', function () {
        $(this).children(".image").css({
            transition: "all " + 0.2 + "s" + " ease",
        });

    });

    s_card.on('mouseleave', function () {
        $(this).css({
            transition: "all " + 0.2  + "s" + " ease",
        });

        // $(this).css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
        $(this).css("transform", "translateY(" + 0 + "px)" + " " + "translateX(" + 0 + "px)");
    });
        
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
});