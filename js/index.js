/*var mainText = document.getElementById("mainText");*/
var submitBtn = document.getElementById("submitBtn");

function submitClick(p1) {
	var firebaseRef = firebase.database().ref();

	/*var messageText = mainText.value;*/

	firebaseRef.child("Project 1").child("Suhail").child("Prefrence").set(p1);

}