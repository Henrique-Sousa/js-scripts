// need to be runned more than once
var i=0;
 
var myVar = setInterval(myTimer, 500);
 
function myTimer() {
 
	var els = document.getElementsByClassName("PageLikedButton"); 

	els[i].click();

	setTimeout(function(){
		document.getElementsByClassName("uiMenu")[0].childNodes[0].childNodes[0].click();

	}, 500);

	i++;
}
