var modalDisplayed = false;

const positiveReponse = "That's great. All the best to ya";
const negativeResponse = "That's a shame. I hope it will get better :)"

const test = function(value) { alert(value); }

const fn_pressMe = function() {
	showModal($('#defmodal'));
}

const fn_hideAllModals = function() {
	hideModal($('.modal'));
}

const fn_positiveResponse = function() {
	fn_hideAllModals;
	$('#response').html(positiveReponse);
	$('#response').fadeIn(200);
	fadeOutResponse();
}

const fn_negativeResponse = function() {
	fn_hideAllModals;
	$('#response').html(negativeResponse);
	$('#response').fadeIn(200);
	fadeOutResponse();
}

function fadeOutResponse(){
	setTimeout(function(){$('#response').fadeOut(1500);}, 1000);
}

$('#btn-pressMe').click(fn_pressMe);
$('#overlay').click(fn_hideAllModals);
$('.modal button').click(fn_hideAllModals);
$('#defmodal').children().eq(2).children().eq(0).click(fn_positiveResponse);
$('#defmodal').children().eq(2).children().eq(1).click(fn_negativeResponse);

function showModal(modal){
	if(modalDisplayed) return;
	$('#overlay').toggleClass('active');
	modal.css('display', 'block');
	modalDisplayed = true;
}

function hideModal(modal){
	if(!modalDisplayed) return;
	$('#overlay').toggleClass('active');
	modal.css('display', 'none');
	modalDisplayed = false;
}
