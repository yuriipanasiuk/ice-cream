!function(){!function(){var e={openMenuBtn:document.querySelector(".menu__open"),closeMenuBtn:document.querySelector(".menu__close"),test:document.querySelector(".menu__list"),menu:document.querySelector(".menu"),body:document.querySelector("body")};function t(){e.menu.classList.toggle("is-open"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.test.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector(".header__btn"),closeModalBtn:document.querySelector(".modal-btn-close"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden")}e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden")})),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",(function(n){"Escape"===n.code&&t();console.log(e.modal)})),e.backdrop.addEventListener("click",(function(n){n.target===e.backdrop&&t()}))}();var e=document.querySelectorAll('a[href^="#"]'),t=!0,n=!1,o=void 0;try{for(var c,l=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))},r=e[Symbol.iterator]();!(t=(c=r.next()).done);t=!0)l(0,c)}catch(e){n=!0,o=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw o}}$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()})),$(".scrollup").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}))}();
//# sourceMappingURL=index.303d3cdb.js.map
