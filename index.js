
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectiontwo").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});


$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectionthree").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});




$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectionfour").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectionfive").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectionsix").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectionseven").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    
    $(".sectioneight").each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop < pageBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});