function myFunction(x) {
    x.classList.toggle("change");
    var sidebar = document.getElementById("mySidenav").style.width
	if(sidebar === "0px") {
		document.getElementById("mySidenav").style.width = "250px";
	}
	if(sidebar === "250px") {
		document.getElementById("mySidenav").style.width = "0";
	}
    
}
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function mail() {
	document.getElementById('email-field').style.display = "none";
	document.getElementById('name-field').style.display = "none";
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
	if(name == "" || email == "" || !validateEmail(email)) {
		if(name == "") {
			document.getElementById('name-field').style.display = "block";
			
		}
		if(email == "" || !validateEmail(email)) {
			document.getElementById('email-field').style.display = "block";

		}
		
		return false;
	}
	$.ajax({
		type: "post",
		url: urlMail,
		data: dataString,
		cache: false,
		success: function(html) {
			$('#msg').html(html);
		}
	})
	return false;
}


 