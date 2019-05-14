// A preloader in JS

var loader;

function loadNow(opacity) {
	if (opacity <= 0) 
		displayContent();
	else{
		loader.style.opacity = opacity;
		window.setTimeout(function() {
			loadNow(opacity - 0.05)
		}, 100);
	}
}


function displayContent() {
	loader.style.display = 'none';
	document.getElementById('home-nav').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
	loader = document.getElementById('loader');
	loadNow(1);
})


/*Image slider*/

var i = 0;
var images = [];
var time = 3000;

/*image lists*/
images[0] = 'paint.png';
images[1] = 'pain.jpg';
images[2] = 'rubbish.jpg';

// Change images
function changeImg() {
	document.slide.src = images[i];
	if (i < images.length - 1) {
		i++;
	}else{
		i = 0;
	}

	setTimeout("changeImg()", time);
}


window.onload = changeImg;


