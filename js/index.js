/*var mainText = document.getElementById("mainText");*/
var submitBtn = document.getElementById("submitBtn");

function submitClick_1(value) {
	var firebaseRef = firebase.database().ref();

	/*var messageText = mainText.value;*/

	firebaseRef.child("Project 1").child("Suhail").child("Prefrence").set(value);

}

function submitClick_2(value) {
	var firebaseRef = firebase.database().ref();

	/*var messageText = mainText.value;*/

	firebaseRef.child("Project 2").child("Suhail").child("Prefrence").set(value);

}

function submitClick_3(value) {
	var firebaseRef = firebase.database().ref();

	/*var messageText = mainText.value;*/

	firebaseRef.child("Project 3").child("Suhail").child("Prefrence").set(value);

}