//фиксированное меню
window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("myP").className = "fixed";
	} else {
		document.getElementById("myP").className = "header_wrap";
	}
};

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scroll_top_btn').fadeIn();
        } else {
            $('.scroll_top_btn').fadeOut();
        }
    });
    $('.scroll_top_btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});

//открыть/скрыть адаптивное фиксированное меню
window.onload = function () {
	var menu = document.querySelector('.show_btn');
	h_menu = document.getElementById('menu');
	menu.onclick = function() {
		if(h_menu.style.display == 'block') {
			h_menu.style.display='none';
		} else {
			h_menu.style.display='block';
		}
	}
}

//изменение ширины экрана
window.onresize = function() {myResize()};

function myResize() {
	h_menu = document.getElementById('menu');
	if (screen.width > 768) {
		h_menu.style.display='block';
	} else {
		h_menu.style.display='none';
	}
};



// карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		center: true,
		loop:true,
		margin:10,
		responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		900:{
			items:3
		},
		1000:{
			items:3
		},
		1200:{
			items:4
		}
	   }
  });
   
});