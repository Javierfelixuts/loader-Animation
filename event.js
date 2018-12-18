window.onload = loading;

function loading(){
	setInterval(function(){
		document.querySelector('.loadAnimation').style.display = 'none';
	}, 4000);
}