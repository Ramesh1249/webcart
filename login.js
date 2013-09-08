
var clickHandler;
function clickHandler()
{
	
	
	var usern=document.getElementById("uname");
	var pawd=document.getElementById("pwd");
	
	if (usern.value=='ramesh' && pawd.value=='password') {
		window.location.href="D:/Ramesh/webpages/cart.html";
	}
		else
		{
			document.getElementById('msg').innerHTML = "The username or password you entered is wrong";
			
			document.getElementById('uname').value = null;
			document.getElementById('pwd').value = null;
		}
	
	
}