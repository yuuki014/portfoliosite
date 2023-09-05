$(function(){
    $('.humberger,.sp-nav a').on('click',function(){
        $('.sp-nav').fadeToggle();
        $('.humberger').toggleClass('open')
}); 
});

$(function () {
$(window).scroll(function () {
$(".fade_in").each(function () {
var elemPos = $(this).offset().top; /* 要素の位置を取得 */
var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
if (scroll > elemPos - windowHeight) {
/* 要素位置までスクロール出来たときに動作する */
$(this).addClass("effect-scroll");
}
});
});
jQuery(window).scroll();
});