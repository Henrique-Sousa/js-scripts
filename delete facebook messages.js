var i=0;
 
var myVar = setInterval(myTimer, 3000);
 
function myTimer() {
 
	var els = document.getElementsByClassName('_5blh _4-0h');
	console.log(els.length);
	els[0].click();
	 
	setTimeout(function(){
	 	
		var dltBtn = document.getElementsByClassName('_54nf')[i-1].childNodes[3].click();

	}, 2000);

	setTimeout(function(){
	 
		var confirmBtn = document.getElementsByClassName('_3quh _30yy _2t_ _3ay_ _5ixy')[0].click();

	}, 2000);
	
	i++;

	if(i%2==0){
		document.getElementsByClassName("_19hf")[0].childNodes[0].click();
	}

	console.log(i/2 + " deleted");
	  
}

