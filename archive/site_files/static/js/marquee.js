/* JavaScript Document */

var marqueeVars = {
	screenSize:'',
	width:0,
	mobileSize:400,
	autoPlay:true,
	currentPanel:1,
	totalPanel:0,
	timePassed:0,
	timeToChange:30,
	duration:1250,
	inTransistion:false,
	panelContent:Array
};

$(document).ready(function(){
	marqueeGatherData();
});

function marqueeGatherData(){
	$('.marquee_data .marquee_panel').each(function(index){
			marqueeVars.totalPanel= index+1;
			var panel_image_l = $(this).attr('data-image')+'_l.jpg';
			var panel_image_s = $(this).attr('data-image')+'_s.jpg';
			var panel_caption = $(this).html();
			marqueeVars.panelContent[index] = '<div class="marquee_panel" data-image-s="'+panel_image_s+'" style="background-image:url('+panel_image_l+');"><div class="overlay"></div><div class="panel_caption">'+panel_caption+'</div></div>';
			
	});
	var marqueeTimer =  setInterval(marqueeAdvance,100)
}


function marqueeAdvance(){
	var marqueeWidth = $('.marquee').width();
	var currentSize = marqueeVars.screenSize;
	if(marqueeWidth>marqueeVars.mobileSize){
		var newSize = 'large';
		}
		else
		{
			var newSize='small';
		}
		marqueeVars.screenSize = newSize;
		if(currentSize != newSize) {
				if(marqueeVars.screenSize == 'large') {

					marqueeMultiPanel();
				
				}else{
					marqueeSinglePanel();


				}
		}
		if(marqueeVars.timePassed == marqueeVars.timeToChange){
			marqueeVars.timePassed = 0 ;

			if(marqueeVars.autoPlay == true){
				if(marqueeVars.currentPanel == marqueeVars.totalPanel ){
					$('.marquee_nav div:nth-child(1)').trigger('click');
				}else{
					$('.marquee_nav div:nth-child('+(marqueeVars.currentPanel+1)+')').trigger('click');
				}

			}
		}else {
			marqueeVars.timePassed+=1;
		}

	}

function marqueeMultiPanel(){
	marqueeVars.timePassed = 0;
	marqueeVars.autoPlay = true;
	var newHtml='<div class="marquee_stage_large"><div class="marquee_container_1"></div><div class="marquee_nav"></div><div class="btn prev"></div><div class="btn next"></div></div>';
	$('.marquee').html('').append(newHtml);

	for(i=1;i<=marqueeVars.totalPanel;i++){
		$('.marquee_nav').append('<div></div>');
	}

	$('.marquee').hover(function(){
		marqueeVars.autoPlay = false;
	},function(){
		marqueeVars.autoPlay = true;
		marqueeVars.timePassed = Math.floor(marqueeVars.timeToChange/2);
	});

	$('.marquee .btn').on('click',function(){
		
		if(!marqueeVars.inTransistion){
			if($(this).hasClass('prev')){
				marqueeVars.currentPanel -=1;
				if(marqueeVars.currentPanel < 1){
					marqueeVars.currentPanel=marqueeVars.totalPanel;
				}

			} else {
				marqueeVars.currentPanel +=1;
				if(marqueeVars.currentPanel > marqueeVars.totalPanel) {
					marqueeVars.currentPanel = 1;
				}
			}
			$('.marquee_nav div:nth-child('+marqueeVars.currentPanel+')').trigger('click');
		}

	});

	$('.marquee_nav div').on('click',function() {

		if(!marqueeVars.inTransistion){

			marqueeVars.inTransistion = true;
			var navClicked = $(this).index();
			marqueeVars.currentPanel = navClicked + 1;

			$('.marquee_nav div').removeClass('selected');
			$(this).addClass('selected');

			$('.marquee_stage_large').append('<div class="marquee_container_2" style="opacity:0;"></div>');
			$('.marquee_container_2').html(marqueeVars.panelContent[navClicked]).animate({opacity:1},marqueeVars.duration,function(){
				$('.marquee_container_1').remove();
				$(this).addClass('.marquee_container_1').removeClass('.marquee_container_2');
				marqueeVars.inTransistion = false;
			});

		}	
	});
	$('.marquee_nav div:first').trigger('click');
}

function marqueeSinglePanel( ) {
	$('.marquee').html('').append('<div class="marquee_stage_small">'+marqueeVars.panelContent[0]+'</div>');
	var panel_image_s = $('.marquee .marquee_stage_small .marquee_panel').attr('data-image-s');
	$('.marquee .marquee_stage_small .marquee_panel').css('background-image','url('+panel_image_s+')');
}


<!-- 

// debugger
/*
var debugTimer = setInterval(setDebugger,100);
function setDebugger() {
	$('.var1').html('screenSize = '+marqueeVars.screenSize);
	$('.var2').html('width = '+marqueeVars.width);
	$('.var3').html('mobileSize = '+marqueeVars.mobileSize);
	$('.var4').html('autoPlay = '+marqueeVars.autoPlay);
	$('.var5').html('currentPanel = '+marqueeVars.currentPanel);
	$('.var6').html('totalPanel = '+marqueeVars.totalPanel);
	$('.var7').html('timeToChange = '+marqueeVars.timeToChange);
	$('.var8').html('timePassed = '+marqueeVars.timePassed);
	$('.var9').html('duration = '+marqueeVars.duration);
}
*/
-->
