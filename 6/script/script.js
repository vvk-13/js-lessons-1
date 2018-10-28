let loopInterval;   //Глобальный loop указатель
let loopCount = 1;  //Счетчик смены картинок
let timer = 2000;   //Таймер переключения картинок

function loopPics(images) {
    changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

let images = document.querySelectorAll(".slider img");
function init() {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            changeBigPicture(i, images[i].src);
        });
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(index, src) {
    let appBigPic = document.getElementById("big_picture");
    appBigPic.src = src;
    loopCount = index;
}

//кнопки для смены слайда
function goToSlide(image) { // функция смены слайда
	changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function nextSlide() { //следующий слайд
	goToSlide(loopCount + 1);
}

function previousSlide() { //предыдущий слайд
	goToSlide(loopCount - 1);
}

let next = document.getElementById('next');
let previous = document.getElementById('previous');
//вызов функции по клику 
next.onclick = function() { 
  	nextSlide();
}
previous.onclick = function() {
  	previousSlide();
}

window.onload = init;



/*
// 2 вариант со слайдами, меняющимися по z-index
// понравилась штука с кнопкой play, попробовал реализовать
// не могу найти ошибку, почему с 1-го слайда идет сразу на последний  

let slides = document.querySelectorAll('.slider2 .slide');
let currentSlide = 0; 
let slideInterval = setInterval(nSlide,4000);
 
let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow() {
 	pauseButton.innerHTML = '&gt;';
 	playing = false;
 	clearInterval(slideInterval);
}

function playSlideshow() {
 	pauseButton.innerHTML = '||';
 	playing = true;
 	slideInterval = setInterval(nSlide,4000);
}

pauseButton.onclick = function() {
 	if(playing) {
 		pauseSlideshow();
  	} else {
 		playSlideshow();
  	}
}

function nSlide() {
 	goToSlide(currentSlide+1);
}

function pSlide() {
 	goToSlide(currentSlide-1);
}

function goToSlide(n) {
 	slides[currentSlide].className = 'slide';
 	currentSlide = n + slides.length;
 	slides[currentSlide].className = 'slide show';
}

let next1 = document.getElementById('next1');
let previous1 = document.getElementById('previous1');

next1.onclick = function() {
 	nSlide();
}

previous1.onclick = function() {
 	pSlide();
}
*/

