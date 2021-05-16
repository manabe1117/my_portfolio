$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').slideToggle(500);
    })
});

$(function(){
    $('.nav-item>a').on('click',function(){
        var windowW =$(window).width();//画面の横幅を取得

        if(windowW<960){
            $('#nav').css({display:"none"});
            $('#nav-btn').toggleClass('-active');
        }
    })
});

// $(window).resize(function() {
//     var windowW =$(window).width();//画面の横幅を取得

//     if(windowW>=960){//画面の横幅が960px以上なら
//         $('#nav').css({display:"flex"})
//     }
//     else{
//         $('#nav').css({display:"none"})
//         $('.-active>#nav').css({display:"block"})
//     }
// });

$(function(){
    new WOW().init();
});

$(function () {
    var headerHight = 80; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");　//この数値は移動スピード
        return false;
    });
});
