//Controls js function of subpages
var subpageModule = {
    subpageScroll: $(window).scroll(function (e) {
        if($(this).width()>=768){
            var currentScroll = $(this).scrollTop();
            $('.subpageContainer .colLeft').css({'top': currentScroll});
        }
    }),
    scrollLinkClick: $('.subpageContainer .scroll-link').on('click', function (event) {
        var sectionID = $(this).attr("data-id");
        mainModule.scrollToID('#' + sectionID, 300);
    })
}