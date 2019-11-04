// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    

    // ambil isi href
    var tujuan =$(this).attr('href');
    // tangkap elemen href
    var elemenTujuan = $(tujuan);
   
    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000,'easeInOutExpo');

    e.preventDefault(); 

});

// paralax
// saat refresh / muncul pertama kali
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

// saat mulai scroll
$(window).scroll(function() {
    var wScroll =$(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 200) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300* (i+1));
        });
        // 
       
    }


});


















