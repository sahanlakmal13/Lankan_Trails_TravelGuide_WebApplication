function feedback(){

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var comment = document.getElementById("comments").value;
	
	var excellent = document.getElementById("excellent").checked;
	var good = document.getElementById("good").checked;
	var bad = document.getElementById("bad").checked;
	
	if (excellent == true){
		var rating = "Excellent"
	}
	else if (good == true){
		var rating = "Good"
	}
	else if (bad == true){
		var rating = "Bad"
	}
	
	alert("Dear "+ name +",Thank you very much for your feedback.\nYou have rated our site as "+ rating + "\nand your comment was "+comment);
	
}