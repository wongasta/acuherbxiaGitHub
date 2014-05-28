
//Default main Module
var mainModule = {
    //Handles scrolling down and up on the nav menu
    scrollLinkClick: $('.mainNavTop .scroll-link').on('click', function (event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        mainModule.scrollToID('#' + sectionID, 400);
    }),
    //function called by above function
    scrollToID: function (id, speed){
        var offSet = 50;
        var targetOffset = $(id).offset().top - offSet;
        var mainNav = $('#main-nav');
        $('html,body').animate({scrollTop:targetOffset}, speed);
        if (mainNav.hasClass("open")) {
            mainNav.css("height", "1px").removeClass("in").addClass("collapse");
            mainNav.removeClass("open");
        }
    },
    //Handles mobile only menu toggles
    toggleMenu: $('.menuToggle a').on('click', function(e){
        e.preventDefault();
        $('.navbar-nav').slideToggle(500);
    })
};

//Module for about section
var aboutModule = {
    //flipBoxClick
    boxClick: $('#about .navMenu a').on('click', function(e){
        e.preventDefault();
        var selected = $(this).attr('data-divcontent');
        $('#about .textContainer > div').hide();
        $('#about .textContainer > .'+selected).slideDown(300);
    })
};

//Module for My Theory
var theoryModule = {
    //Clicking the icons
    theoryClick: $('#theory .itemSelector a').on('click', function(e){
        e.preventDefault();
        var selected = $(this).attr('data-theory');
        $('#theory  .theoryContainer > div').hide();
        $('#theory  .theoryContainer > .' + selected).slideDown(300);
    })
};

//Module for Treatments
var theoryModule = {
    //appear each one
    treatmentAppear: $('#treatments').waypoint(function(){
        var totalBoxy = $('#treatments .boxy').length;
        var currentBoxy = 0;
        var chainInterval = setInterval(showBoxy, 250);

        function showBoxy(){
            if (currentBoxy<totalBoxy){
                $('#treatments .boxy:eq('+ currentBoxy +')').css({'opacity':1});
                currentBoxy++;
            }else{
                clearInterval(chainInterval);
            }
        }
    }, {offset: 400})

};

$(document).ready(function() {

});






