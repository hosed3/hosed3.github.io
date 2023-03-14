window.addEventListener('scroll', function(){
   var header = document.querySelector('header');
   header.classList.toggle('stick', window.scrollY > 0);
})

function toggleMenu(){
   var menutoggle = document.querySelector('.toggle');
   var menu = document.querySelector('.menu');
   menutoggle.classList.toggle('active');
   menu.classList.toggle('active');
}

var backToTop = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    }else {
        backToTop.style.display = "none";
      }
    }

function topFunction() { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






function openModal() {
   document.getElementById("myModal").style.display = "block";
 }
 
 function closeModal() {
   document.getElementById("myModal").style.display = "none";
 }
 
 var slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
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
   captionText.innerHTML = dots[slideIndex-1].alt;
}


var d = new Date();
var n = d.getFullYear();
document.getElementById("hora").innerHTML = n;

var bar = document.querySelector('.bar');
		var content = document.querySelector('.content');

		bar.addEventListener('click', function() {
			content.classList.toggle('show');
			bar.innerText = content.classList.contains('show') ? 'Kliknij mnie, aby ukryć tekst!' : 'Kliknij mnie, aby pokazać ukryty tekst!';
		});