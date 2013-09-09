
var deleteerror;
function deleteerror(event)
{
	var targ = event.srcElement||event.target;
	var mytarget;
	while(targ.tagName.toLowerCase()!="div")
	{
		targ=targ.parentNode;
	}
	mytarget=targ;
	
	document.getElementById('hide1').setAttribute('class','hide');
}


var addbutton;
function addbutton(event)
{	
	var val11=document.getElementById('name').value;
	var val12=document.getElementById('author').value;
	var val13=document.getElementById('price').value;

	
	if(val11!="BOOK NAME" && val11!="" && val12!="AUTHOR NAME" && val12!="" && val13!="PRICE" && val13!="")

	{ 
		if((val13 < 48 || val13 > 57) && (val13 < 96 || val13 > 105)){
		document.getElementById('name1').setAttribute('value',document.getElementById('name').value);
		document.getElementById('author1').setAttribute('value',document.getElementById('author').value);
		document.getElementById('price1').setAttribute('value',document.getElementById('price').value);
		var lis=document.getElementById('lic').innerHTML;
		var childli=document.createElement('li');
		document.getElementById('list').appendChild(childli);
		childli.innerHTML=lis;
		document.getElementById('hide1').setAttribute('class','hide');
		}
		else
		{
			document.getElementById('msg').innerHTML = "Enter only digits in price field";
			document.getElementById('hide1').setAttribute('class','show');

		}
	}
	else
	{
		document.getElementById('hide1').setAttribute('class','show');
		document.getElementById('msg').innerHTML = "Enter a valid input ";
		//document.getElementById('error1').setAttribute("style","display:block");

	}
	if(val11!="BOOK NAME" && val11!="" && val12!="AUTHOR NAME" && val12!="" && val13!="PRICE" && val13!="")

	{ 
		if((val13 < 48 || val13 > 57) && (val13 < 96 || val13 > 105)){
	document.getElementById('name').value="BOOK NAME";
	document.getElementById('author').value="AUTHOR";
	document.getElementById('price').value="PRICE";
	
}
}



}

var deletebutton;
function deletebutton(event)
{
	var targ = event.srcElement||event.target;
	var mytarget;
	while(targ.tagName.toLowerCase()!="li")
	{
		targ=targ.parentNode;
	}
	mytarget=targ;
	mytarget.parentNode.removeChild(mytarget);
}

var upbutton;
function upbutton(event)
{
	var targ1 =event.target;
	var mytarget;
	while(targ1.tagName.toLowerCase()!="li")
	{

		targ1=targ1.parentNode;
	}
	mytarget=targ1;
	var cild=document.getElementById('list').childNodes[3];
	if(mytarget!=cild)
	{
		var temp=mytarget.previousSibling.innerHTML;
		mytarget.previousSibling.innerHTML=mytarget.innerHTML;
		mytarget.innerHTML=temp;
		var temp1=mytarget.previousSibling.value;
		alert(temp1);
	}
	else
	{
		document.getElementById('msg').innerHTML = "It will not go further up";
			document.getElementById('hide1').setAttribute('class','show');
		/*	var temp=document.getElementById('list').lastChild.innerHTML;
		var temp1=mytarget.innerHTML;
		mytarget.innerHTML=temp;
		document.getElementById('list').lastChild.innerHTML=temp1;*/
	}
}

var downbutton;
function downbutton(event)
{
	var targ1 =event.target;
	var mytarget;
	while(targ1.tagName.toLowerCase()!="li")
	{

		targ1=targ1.parentNode;
		//console.log(targ1);
		//console.log(targ1.tagName.toLowerCase());
	}
	mytarget=targ1;
	var cild=document.getElementById('list').lastChild;
	if(mytarget!=cild)
	{
		var temp=mytarget.nextSibling.innerHTML;
		mytarget.nextSibling.innerHTML=mytarget.innerHTML;
		mytarget.innerHTML=temp;	

	}
}