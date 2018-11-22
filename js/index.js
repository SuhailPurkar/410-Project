/* firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $(".login-cover").hide();

    var dialog = document.querySelector('#loginDialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();
  } else {
    var dialog = document.querySelector('#loginDialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});*/

/*$("#loginBtn").click(
	function(){
		var email = $("#loginEmail").val();
		var password = $("#loginPassword").val();

		

			$("#checkingEmail").text(email);
			$("#checkingPassword").text(password);
			

			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			 
			  $("#loginError").show().text(error.message);
			 
			});
		
	}

);
*/



/*
var submitBtn = document.getElementById("submitBtn");

function submitClick_1(value) {
	var firebaseRef = firebase.database().ref();

	

	firebaseRef.child().child("Project 1").child("Prefrence").set(value);

}

function submitClick_2(value) {
	var firebaseRef = firebase.database().ref();

	

	firebaseRef.child("Project 2").child("Suhail").child("Prefrence").set(value);

}

function submitClick_3(value) {
	var firebaseRef = firebase.database().ref();

	

	firebaseRef.child("Project 3").child("Suhail").child("Prefrence").set(value);

}*/

