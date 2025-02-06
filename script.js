$(document).ready(function(){
    $(".togglemenubtn").on('click' ,function(){
        $(".headerdropdown").addClass("open");
    });
    $(".crossbtn").on('click' ,function(){
        $(".headerdropdown").removeClass("open");
    });
});

$(document).ready(function () {
    let $scrollContainer = $('.scrollcontent');
    let $items = $('.portfoliocardup');
    let containerWidth = $scrollContainer.width();
    let totalWidth = 0;
    $items.each(function () {
        totalWidth += $(this).outerWidth(true); 
    });
    let translateX = 0;
    let maxTranslateX = Math.min(0, containerWidth - totalWidth);
    let speed = 40; 
    function updateScroll() {
        translateX = Math.max(maxTranslateX, Math.min(0, translateX));
        $scrollContainer.find('.portfoliocardup').css('transform', `translate3d(${translateX}px, 0, 0)`);
    }
    $scrollContainer.on('wheel', function (e) {
        if (Math.abs(e.originalEvent.deltaX) > Math.abs(e.originalEvent.deltaY)) {
            e.preventDefault();
            translateX -= e.originalEvent.deltaX * 1.5; 
            updateScroll();
        } else {
            e.preventDefault();
            translateX -= e.originalEvent.deltaY * 1.5; 
            updateScroll();
        }
    });
    let touchStartX = 0;
    $scrollContainer.on('touchstart', function (e) {
        let touch = e.originalEvent.touches[0];
        touchStartX = touch.clientX;
    });
    $scrollContainer.on('touchmove', function (e) {
        e.preventDefault();
        let touch = e.originalEvent.touches[0];
        let moveX = touch.clientX - touchStartX;
        translateX += moveX * 1.2;
        updateScroll();
        touchStartX = touch.clientX;
    });
    updateScroll();
});
