var secondLeftIdx = 0,leftIdx =1,currIdx =2,rightIdx =3,secondRightIdx =4;

function debounce(func, wait = 200, immediate = true) {
	var timeout;
	return function() {
	var context = this, args = arguments;
	var later = function() {
	timeout = null;
	if (!immediate) func.apply(context, args);
	};
	var callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if(callNow){func.apply(context, args);}
	};
    }
let lastIdx;
var videos = Array.from(document.querySelectorAll('.special-video'));
function highlights(){
	videos.forEach(video => {
	video.className = 'special-video';
	video.pause();
	});
	videos[currIdx].classList.add('active-image');
	videos[leftIdx].classList.add('left-image1');
	videos[secondLeftIdx].classList.add('left-image2');
	videos[rightIdx].classList.add('right-image1');
	videos[secondRightIdx].classList.add('right-image2');
	videos[currIdx].play();
}

function setIndexes(){
	leftIdx = 			currIdx == 0 ? 4 : Number(currIdx) - 1;
	rightIdx = 			currIdx == 4 ? 0 : Number(currIdx) + 1;
	secondLeftIdx = 	leftIdx == 0? 4: Number(leftIdx) - 1;
	secondRightIdx = 	rightIdx == 4? 0: Number(rightIdx) + 1;
}
function transition(){
	lastIdx	= currIdx
	currIdx = this.dataset.key;
	if(lastIdx = currIdx){
		const method = this.muted ? false : true;
		this.muted = method;
	}
	setIndexes()
	highlights();
}

function transitionAuto(){
	currIdx = currIdx == 0 ? 4: Number(currIdx) - 1; 
	setIndexes();
	highlights();
}


videos.forEach(video =>
	video.onended = function() {
		
	transitionAuto();
	});

videos.forEach(video => video.addEventListener('click',transition));
videos[currIdx].play();

function transitionOnSlide(direction){
	if(direction == 'negative'){
		transitionAuto();
	}
	else{
	currIdx = currIdx == 4 ? 0: Number(currIdx) + 1; 
	setIndexes();
	highlights();
	}
}

var collection = document.querySelector('.active-image');

var startX = 150;

function myFunction(event) {

  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  var direction = x > startX ? "positive" : "negative";
  transitionOnSlide(direction);
}

videos.forEach(video => video.addEventListener("touchmove", debounce(myFunction)));


function goLeft(){
	currIdx = currIdx == 0 ? 4: Number(currIdx) - 1; 
	setIndexes();
	highlights();
}

function goRight(){
	currIdx = currIdx == 4 ? 0: Number(currIdx) + 1; 
	setIndexes();
	highlights();
}