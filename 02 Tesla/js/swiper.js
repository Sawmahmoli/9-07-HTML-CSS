// 換圖輪播 JavaScript
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.25,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// jQuery UI tabs => 套件衝突！改為在 HTML 中置入
//  $( function() {
//     $( "#album" ).tabs();
//   } );