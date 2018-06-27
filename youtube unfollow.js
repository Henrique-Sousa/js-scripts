var i=0;
 
var myVar = setInterval(myTimer, 3000);
 
function myTimer() {
 
	var els = document.getElementsByTagName("ytd-subscribe-button-renderer");
	 
	if(i<els.length){
	 
		els[i].childNodes[1].click();
		 
		setTimeout(function(){
		 
			var unSubBtn = document.getElementById("confirm-button").click();

		}, 2000);
		 
	}
	 
	i++;
	 
	console.log(i + " unsubscribed");
 
}
