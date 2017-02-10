
function changemap(newUrl) {
newMap = "exp5_" + newUrl + ".html";
top.frames[8].location.replace(newMap);

//alert(top.frames[5].name);

	switch(newUrl){
	case'1': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'3': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'4': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'5': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'6': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'7': top.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	}

	if (newUrl=='6' ){
	newBot = "exp7_" + newUrl + ".html";
	top.frames[12].location.replace(newBot);
	}
	else{
	newBot = "exp7_set.html";
	top.frames[12].location.replace(newBot);
	}
	
	if (newUrl=='3' || newUrl=='4' || newUrl=='5' || newUrl=='6' || newUrl=='7'){
	newZoom = "exp6_set.html";
	top.frames[9].location.replace(newZoom);
	}
	else{
	newZoom = "exp6_1set.html";
	top.frames[9].location.replace(newZoom);
	}

}

