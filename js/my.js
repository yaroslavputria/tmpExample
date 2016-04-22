$(document).ready(function(){
	$(".akkordion-slide .top_line_akkordion").css('width', '100%');
	$(".akkordion-slide-1 .top_line_akkordion").css('width', '358px');
	$(".akkordion_content").hide(0);
	$(".akkordion-slide-1 .akkordion_content").show(0);
	$(".akkordion-slide-1 .akkordion_header h3 span").removeClass("ti-angle-up").addClass("ti-angle-down");
	$(".akkordion-slide .akkordion_header").hover(function(){
		// $(this).css('z-index', '100');
		$(this).addClass('flagg_1');
		$(".flagg_1").next().css('border-color', '#ff3c1f');
		$(".flagg_1").next().css('width', '100%');
		$(this).addClass('active_header');
		$(this).removeClass('flagg_1');
	},function(){
		// $(this).css('z-index', '1');
		$(this).addClass('flagg_2');
		$(".flagg_2").next().css('border-color', '#E6E9ED');
		// $(".akkordion-slide:not(.active_slide) .top_line_akkordion").addClass("next_line");
		$(".flagg_2").next().css('width', '358px');
		$(this).removeClass('active_header');
		$(this).removeClass('flagg_2');
	});
	
	$(".akkordion-slide:not(.active_slide) .akkordion_header").click(function(){
		$(".active_slide .akkordion_content").slideUp(500);
		$(this).addClass('flagg');
		$(".active_slide").removeClass("active_slide");
		$('.flagg').parent().addClass('active_slide');
		$(".akkordion-slide:not(.active_slide) .akkordion_content").slideUp(500);
		$(".akkordion-slide:not(.active_slide) .top_line_akkordion").addClass("next_line");
		$(".akkordion-slide:not(.active_slide) .akkordion_header h3 span").removeClass("ti-angle-down").addClass("ti-angle-up");
		$(".active_slide .akkordion_content").slideDown(500);
		$(".active_slide .top_line_akkordion").removeClass("next_line");
		$(".active_slide .akkordion_header h3 span").removeClass("ti-angle-up").addClass("ti-angle-down");
		$(this).removeClass('flagg');
	});

	$(".switch_lider").hover(function(){
		$(this).css('border-color', '#ff3c1f');
	},function(){
		$(this).css('border-color', '#abb3c0');
	});
	// $(".switch_lider:first").addClass("active_switch");
	// $(".switch_lider.active_switch").css('background-color', '#ff3c1f');
	$(".slider_section:not(.active_slider_section)").hide(0);
	$(".switch_lider:not(.active_switch)").click(function(){
		$(".switch_lider.active_switch").removeClass("active_switch");
		$(this).addClass("active_switch");
		$(this).css('background-color', '#ff3c1f');
		$(".switch_lider:not(.active_switch)").css('background-color', '#ffffff');
		$(".slider_section:not(.active_slider_section)").slideUp(500);
		var classList = $(".switch_lider .active_switch").attr('class').split(/\s+/);
		console.log(classList);
		$.each(classList, function(index, item){
    	if (item === 'switch_lider slide_first active_switch'){
    		$("switch_lider.slide_first.active_switch").hide(0);
       //do something
    	} else if (item === 'switch_lider slide_second active_switch'){

    	} else if (item === 'switch_lider slide_third active_switch'){

    	}
		});
		// var check_slide = $(".switch_lider .active_switch").attr('class');
		// // document.write(check_slide);
		// switch(check_slide){
		// 	case "switch_lider slide_first active_switch": $(".slider_section").show(0);
		// 	break;
		// 	case "switch_lider slide_second active_switch": $(".slider_section").show(0);
		// 	break;
		// 	case "switch_lider slide_third active_switch": $(".slider_section").show(0);
		// 	break;
		// };
	});

});
