var modalDisplayed = false;

const positiveResponse = "That's great. All the best to ya";
const negativeResponse = "That's a shame. I hope it will get better :)"

const respDiv = $('#response');
const pressMe = function() {
	showModal($('#defmodal'));
}
const hideAllModals = function() {
	hideModal($('.modal'));
}
const respDivPositive = function(){
	setRespDivValue(positiveResponse);
}
const respDivNegative = function(){
	setRespDivValue(negativeResponse);
}


$('#btn-pressMe').click(pressMe);
$('#overlay').click(hideAllModals);
$('.modal button').click(hideAllModals);
$('#defmodal').children().eq(2).children().eq(0).click(respDivPositive);
$('#defmodal').children().eq(2).children().eq(1).click(respDivNegative);

function setRespDivValue(value){
	hideAllModals;
	respDiv.text(value);
	respDiv.fadeIn(200);
	fadeOutResponse();
}

function fadeOutResponse(){
	setTimeout(function(){respDiv.fadeOut(1500);}, 1000);
}

function showModal(modal){
	if(modalDisplayed) return;
	$('#overlay').toggleClass('active');
	modal.toggleClass('active');
	modalDisplayed = true;
}

function hideModal(modal){
	if(!modalDisplayed) return;
	$('#overlay').toggleClass('active');
	modal.toggleClass('active');
	modalDisplayed = false;
}
