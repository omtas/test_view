function displayScroll(){
    $('#scroll').css('display', 'block')
}

// スクロール禁止
function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止解除
function return_scroll() {
    // PCでのスクロール禁止解除
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止解除
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}

// スクロール関連メソッド
function scroll_control(event) {
    event.preventDefault();
}

// スクロールアイコン表示
setTimeout("displayScroll()", 11000);

//setTimeout("no_scroll()", 0);
setTimeout("return_scroll()", 11300);

// スクロールスポード
$(function () {
    scrLength = 5000;
    scrSpeed = 100;
    scrEasing = 'easeOutCirc';

    var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(mousewheelevent, function (e) {
        e.preventDefault();
        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        if (delta < 0) {
            scrSet = $(document).scrollTop() + scrLength;
        } else {
            scrSet = $(document).scrollTop() - scrLength;
        }
        $('html,body').stop().animate({
            scrollTop: scrSet
        }, scrSpeed, scrEasing);
        return false;
    });
});

$(window).on('load resize', function(){
    var w = $(window).width();

    if (w < 575.98) {

        // スマホタブレットのアニメーション

        if (370 < w && w < 575.98) {

            //画面サイズが370以上で575.98未満のときの処理
    
            ScrollReveal().reveal('#priceCard1', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
            ScrollReveal().reveal('#priceCard2', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
            ScrollReveal().reveal('#priceCard3', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
    
        } else if (370 > w) {
    
            //画面サイズが370未満のときの処理
    
            ScrollReveal().reveal('#priceCard1', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
            ScrollReveal().reveal('#priceCard2', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
            ScrollReveal().reveal('#priceCard3', { duration: '1200', viewFactor: '0.3', origin: 'bottom', distance: '50px'});
            
        }

        ScrollReveal().reveal('#container-title-sm', { duration: '1480', viewFactor: '0.4', origin: 'bottom', distance: '90px' });
        ScrollReveal().reveal('.container-contents', { duration: '1480', viewFactor: '0.4', reset: 'true', distance: '20px'  });
        ScrollReveal().reveal('.animateright', { distance: '7px', origin: 'right', viewFactor: '0.8' ,reset: 'true' });
        ScrollReveal().reveal('.animateleft', { distance: '7px', origin: 'left', viewFactor: '0.8' ,reset: 'true' });
        ScrollReveal().reveal('#customerValu1', { duration: '1500', delay: '1200', viewFactor: '0.3', reset: 'true', distance: '5px'});
        ScrollReveal().reveal('#customerValu2', { duration: '1500', delay: '3200', viewFactor: '0.3', reset: 'true', distance: '5px'});
        ScrollReveal().reveal('#customerValu3', { duration: '1500', delay: '5200', viewFactor: '0.3', reset: 'true', distance: '5px'});
        ScrollReveal().reveal('#customerValu4', { duration: '1500', delay: '7200', viewFactor: '0.3', reset: 'true', distance: '5px'});
        ScrollReveal().reveal('#customerValu5', { duration: '1500', delay: '9200', viewFactor: '0.3', reset: 'true', distance: '5px'});
    

    } else {

        //それ以外のときの処理(PC)
        
        ScrollReveal().reveal('#priceCard1', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard2', { duration: '1800', delay: '500', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard3', { duration: '1800', delay: '1000', viewFactor: '0.3' });
        ScrollReveal().reveal('#container-title-pc', { duration: '2000', viewFactor: '0.1', scale: '6', delay: '20', distance: '-600px', reset: 'true'});
        ScrollReveal().reveal('.container-contents', { duration: '1480', viewFactor: '0.4', reset: 'true', distance: '90px' });
        ScrollReveal().reveal('.animateright', { distance: '400px', origin: 'right', viewFactor: '0.8' });
        ScrollReveal().reveal('.animateleft', { distance: '400px', origin: 'left', viewFactor: '0.8' });
        ScrollReveal().reveal('#customerValu1', { duration: '1500', delay: '1200', viewFactor: '0.3', reset: 'true', distance: '20px'});
        ScrollReveal().reveal('#customerValu2', { duration: '1500', delay: '3200', viewFactor: '0.3', reset: 'true', distance: '20px'});
        ScrollReveal().reveal('#customerValu3', { duration: '1500', delay: '5200', viewFactor: '0.3', reset: 'true', distance: '20px'});
        ScrollReveal().reveal('#customerValu4', { duration: '1500', delay: '7200', viewFactor: '0.3', reset: 'true', distance: '20px'});
        ScrollReveal().reveal('#customerValu5', { duration: '1500', delay: '9200', viewFactor: '0.3', reset: 'true', distance: '20px'});
    


    }

    ScrollReveal().reveal('.animateslow', { duration: '1800', viewFactor: '0.3' });
    ScrollReveal().reveal('.customer-contents', { duration: '1800', viewFactor: '0.3', reset: 'true'});

  });
  