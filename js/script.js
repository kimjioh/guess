const $next=$('.slick-next')
const $prev=$('.slick-prev')
const $slider=$('.slide_list')
const $none=$('.none');
const $more=$('.btn_more_wrap .btn-more');
const $top=$('#btn_top');


$(window).scroll(function() {
  
	if($(this).scrollTop() > 70) {
		$("#header").css({display:'none'});
		$("#header.is_scroll").css({display:'block'});
	}else {
		$("#header").css('display','block');
		$("#header.is_scroll").css('display','none');
	};

    if($(this).scrollTop() > 1100) {
		$("#btn_top").css({display:'block'});
	}else {
		$("#btn_top").css('display','none');
	};

});

$more.click(function(){
    $none.css('display','block');
    $more.css('display','none');
});



$('.fa-bars').click(function(){
	$('.mobile_nav').slideToggle();
});
