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

function side_scroll() {
    document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});
}
  
setTimeout("displayScroll()", 11000);


setTimeout("side_scroll()", 0);
setTimeout("no_scroll()", 0);
setTimeout("return_scroll()", 11300);

$(window).on('load resize', function(){
    var w = $(window).width();
    if (370 < w && w < 575.98) {

        //画面サイズが370以上で575.98未満のときの処理

        ScrollReveal().reveal('#priceCard1', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard2', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard3', { duration: '1800', viewFactor: '0.3' });
        ScrollReveal().reveal('#container-title-sm', { duration: '1480', viewFactor: '0.4', origin: 'bottom', distance: '90px' });
        ScrollReveal().reveal('.container-contents', { duration: '1480', viewFactor: '0.4', reset: 'true' });
        ScrollReveal().reveal('.animateright', { distance: '50px', origin: 'right', viewFactor: '0.8' });
        ScrollReveal().reveal('.animateleft', { distance: '50px', origin: 'left', viewFactor: '0.8' });

    } else if (370 > w) {

        //画面サイズが370未満のときの処理

        ScrollReveal().reveal('#priceCard1', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard2', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard3', { duration: '1800', viewFactor: '0.3' });
        ScrollReveal().reveal('#container-title-sm', { duration: '1480', viewFactor: '0.4', origin: 'bottom', distance: '90px' });
        ScrollReveal().reveal('.container-contents', { duration: '1480', viewFactor: '0.4', reset: 'true' });
        ScrollReveal().reveal('.animateright', { distance: '30px', origin: 'right', viewFactor: '0.8' });
        ScrollReveal().reveal('.animateleft', { distance: '30px', origin: 'left', viewFactor: '0.8' });
        
    } else {
        //それ以外のときの処理
        ScrollReveal().reveal('#priceCard1', { duration: '1800', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard2', { duration: '1800', delay: '500', viewFactor: '0.3'});
        ScrollReveal().reveal('#priceCard3', { duration: '1800', delay: '1000', viewFactor: '0.3' });
        ScrollReveal().reveal('#container-title-pc', { duration: '2000', viewFactor: '0.1', scale: '6', delay: '20', distance: '-600px', reset: 'true'});
        ScrollReveal().reveal('.container-contents', { duration: '1480', viewFactor: '0.4', reset: 'true' });
        ScrollReveal().reveal('.animateright', { distance: '400px', origin: 'right', viewFactor: '0.8' });
        ScrollReveal().reveal('.animateleft', { distance: '400px', origin: 'left', viewFactor: '0.8' });
    }

    ScrollReveal().reveal('.animateslow', { duration: '1800', viewFactor: '0.3' });
    ScrollReveal().reveal('.customer-contents', { duration: '1800', viewFactor: '0.3', reset: 'true'});
    ScrollReveal().reveal('#customerValu1', { duration: '1800', delay: '1200', viewFactor: '0.3', reset: 'true', distance: '20px',});
    ScrollReveal().reveal('#customerValu2', { duration: '1800', delay: '3200', viewFactor: '0.3', reset: 'true', distance: '20px'});
    ScrollReveal().reveal('#customerValu3', { duration: '1800', delay: '5200', viewFactor: '0.3', reset: 'true', distance: '20px'});
    ScrollReveal().reveal('#customerValu4', { duration: '1800', delay: '7200', viewFactor: '0.3', reset: 'true', distance: '20px'});
    ScrollReveal().reveal('#customerValu5', { duration: '1800', delay: '9200', viewFactor: '0.3', reset: 'true', distance: '20px'});

  });
  