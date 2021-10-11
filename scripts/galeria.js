var slideIndex = 1;

	
function start() {
 
  // Eventos de Mouse
  var i = 1;
  var image;
  for(i = 1;i < 9; i ++){	
  image = document.getElementById("img"+i);
	  image.addEventListener("mouseenter", zoomIn, false);
	  image.addEventListener("mouseleave", zoomOut, false);
	  // Eventos de toque

	  image.addEventListener("touchstart", zoomIn, false);
	  image.addEventListener("touchend", zoomOut, false);
  }
  showSlides(slideIndex);

}	

//Haptics Effectcs
function vibrate_zoomIn(){
	window.navigator.vibrate([50,10,100,10,150,10,300]);	
}
	
function vibrate_zoomOut(){
	window.navigator.vibrate([300,10,150,10,100,10,50]);	
}

function vibrate_previous(){
	window.navigator.vibrate([300,20,50]);	
}

function vibrate_next(){
	window.navigator.vibrate([50,20,300]);	
}

//Fade and Slider Effects		
function zoomIn(e){
	e.preventDefault();
	window.navigator.vibrate(0);
	vibrate_zoomIn();
	zoom(true);
	document.getElementById(getText("data")).innerHTML = "Zoom In";
	
}
	
function zoomOut(e){
	e.preventDefault();
	window.navigator.vibrate(0);
	vibrate_zoomOut();
	zoom(false);
	document.getElementById(getText("data")).innerHTML = "Zoom Out";
}
	

	
// Next/previous controls
function plusSlides(n) {	
  showSlides(slideIndex += n);
  if(n < 0){
	  vibrate_previous();
  } else {
	  vibrate_next();
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";	
} 	

function zoom(isIn) {
	var size = "1";
	if(isIn){
		size = "1.5";
	}
	var element = document.getElementById(getText("img"));
    // Code for Chrome, Safari, Opera
    element.style.WebkitTransform = "scale(" + size + ")"; 
    // Code for IE9
    element.style.msTransform = "scale(" + size + ")"; 
    // Standard syntax
    element.style.transform = "scale(" + size + ")"; 
	
}

	
function getText(baseText){
	return baseText + slideIndex
}	
