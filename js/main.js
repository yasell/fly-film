$(document).ready(function($) {
	// burger`s mechanik
	$body = $("body");
	$menuTrigger = $("#menu__trigger");

	$menuTrigger.on("click", function() {
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$(this).removeClass("active__mod");
		} else {
			$body.addClass("menu__open");
			$(this).addClass("active__mod");
		}
	});

	// menu
	$(".top-nav, #top").on("click", "a", function(event) {
		event.preventDefault();
		// close burger
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$menuTrigger.removeClass("active__mod");
		}
		// scroll
		var el = $(this).attr("href");
		$("body,html").animate({
			scrollTop: $(el).offset().top
		}, 2000);
		return false;
	});
	// back to top
	$("#back-top").hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$("#back-top").fadeIn();
		} else {
			$("#back-top").fadeOut();
		}
	});

	$("#back-top").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500);
		return false;
	});



	// date pickers
	// birthday
	$("#date_wrap").birthdayPicker();
	// choose date
	// var availableDates = ["24-12-2016", "22-1-2017", "4-2-2017", "18-2-2017", "12-3-2017"];
	//
	// function available(date) {
	// 	dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	// 	if ($.inArray(dmy, availableDates) != -1) {
	// 		return [true, "", "Available"];
	// 	} else {
	// 		return [false, "", "unAvailable"];
	// 	}
	// }
	//
	// $("#datepicker").datepicker({
	// 	beforeShowDay: available
	// });



	//team slider
	var $carousel = $(".team__carousel"),
		currentSlide, nextSlide;

	$(".next").click(function() {
		currentSlide = $carousel.attr("data-slide");
		nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
		$carousel.attr("data-slide", nextSlide);
	});

	$(".prev").click(function() {
		currentSlide = $carousel.attr("data-slide");
		nextSlide = +currentSlide === 1 ? 4 : +currentSlide - 1;
		$carousel.attr("data-slide", nextSlide);
	});
});

// order send
$("#order").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		// open modal
		$("#modal_order").addClass("modal_show");
		$(".modal_bg").css("display", "block");
		// close modal
		$("#modal_close").click(function() {
			$("#modal_order").removeClass("modal_show");
			$(".modal_bg").css("display", "none");
		});
		$(".modal_bg").click(function() {
			$("#modal_order").removeClass("modal_show");
			$(".modal_bg").css("display", "none");
		})
		$("#order").trigger("reset");
	});
	return false;
});
