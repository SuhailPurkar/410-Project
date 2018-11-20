/*var mainText = document.getElementById("mainText");*/
var submitBtn = document.getElementById("submitBtn");

function submitClick(value) {
	var firebaseRef = firebase.database().ref();

	/*var messageText = mainText.value;*/

	firebaseRef.child("Project 1").child("Suhail").child("Prefrence").set(value);

}