$(function () {

    // 漢堡按鈕
    $('.hamburger').click(function () {
        // 切換 ≡ => X
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');

    });

    // 捲動至指定位置
    $(".menu a").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // gotop
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("gotop").stop().fadeIn("fast", 1);
        } else {
            $("gotop").stop().fadeOut("fast");
        }
    });

});

// 共用預設
$('.smoove').smoove(
    { offset: 200 }
);


