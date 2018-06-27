btns = document.querySelectorAll('[role="button"]')
for (var i = 22; i < btns.length; i++){
	if(btns[i].childNodes[1] != undefined){
		if(btns[i].childNodes[1].textContent == "Following"){
			btns[i].click();
		}
	}
}
