$(function() {
    // 波動ライブラリ
    // let $hoge = $('.main-page');
    // $hoge.ripples({
    //     resolution: 300,
    //     dropRadius: 25,
    //     perturbance: 0.05
    // });
    // 波動ライブラリ終了

    $('.ham').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

});