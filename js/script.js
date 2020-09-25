// const viewmateri = document.querySelector('#viewmateri');
// const materi1 = document.querySelector('#materi1');
// const materi2 = document.querySelector('#materi2');
// const materi3 = document.querySelector('#materi3');
// materi1.style.display = 'block';
// const btnmateri1 = document.querySelector('#btnmateri1');
// const btnmateri2 = document.querySelector('#btnmateri2');
// const btnmateri3 = document.querySelector('#btnmateri3');

// btnmateri1.addEventListener('click', function(){
// 	materi2.style.display = 'none';
// 	materi3.style.display = 'none';
// 	materi1.style.display = 'block';
// });
// btnmateri2.addEventListener('click', function(){
// 	materi1.style.display = 'none';
// 	materi3.style.display = 'none';
// 	materi2.style.display = 'block';
// });
// btnmateri3.addEventListener('click', function(){
// 	materi1.style.display = 'none';
// 	materi2.style.display = 'none';
// 	materi3.style.display = 'block';
// });



$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".page-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -50
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
});


document.querySelector('.navHide').style.display = 'none' 

$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        document.querySelector('.navHide').style.display = 'block' 
    } else {
        document.querySelector('.navHide').style.display = 'none'
    }
});


// window.onscroll = function() {scrollFunction()};
 
 
// function scrollFunction() {
 
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 
//         document.querySelector(".nav_hide").style.display = "block";
 
//     } else {
 
//         document.getElementById("myBtn").style.display = "none";
 
//     }
 
// }
 
// // fungsi ketika user meng klik tombol back to top maka halaman akan menscroll ke atas
 
 
// function topFunction() {
 
//     document.body.scrollTop = 0;
 
//     document.documentElement.scrollTop = 0;
 
// }






// event saat di klik link navbar
// $('.page-scroll').on('click', function(event){
// 	// ambil isi href link
// 	var tujuan = $(this).attr('href');
// 	// tangkap elemen
// 	var elemenTujuan = $(tujuan);
// 	// pindahkan scroll
// 	$('body').animate({
// 	scrollTop: elemenTujuan.offset(tujuan).top -50
// 	}, 1250, 'swing');

// 	event.preventDefault();

// });
// const btn = document.querySelectorAll('.btnmat');
// const materi = document.wierySelectorAll('.materi1');

// for(let i = 0; i < btn.length ; i++){

// 	btn[i].addEventListener('click', function(){
// 		materi[i].style.display = 'block';
// 	});

// 	btn[i].addEventListener('click', function(){
// 		materi[i].style.display = 'none';
// 	});
// };