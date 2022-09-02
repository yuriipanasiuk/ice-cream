// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu__open'),
//     closeMenuBtn: document.querySelector('.menu__close'),
//     test: document.querySelector('.menu__list'),
//     menu: document.querySelector('.menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.test.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     openHeaderBtn: document.querySelector('.header__btn'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.openHeaderBtn.addEventListener('click', toggleModal);

//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// const anchors = document.querySelectorAll('a[href*="#"]');
// for (anchor of anchors) {
//   if (anchor) {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       anchorID = this.getAttribute('href');
//       // console.log(anchorID);
//       document.querySelector(anchorID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     });
//   }
// }

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__open'),
    closeMenuBtn: document.querySelector('.menu__close'),
    test: document.querySelector('.menu__list'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.test.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.header__btn'),
    closeModalBtn: document.querySelector('.modal-btn-close'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', onModalOpen);
  refs.closeModalBtn.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onKeyClick);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function onBackdropClick(event) {
    if (event.target === refs.backdrop) {
      onModalClose();
    }
  }

  function onModalOpen() {
    refs.modal.classList.remove('is-hidden');
  }
  function onModalClose() {
    refs.modal.classList.add('is-hidden');
  }

  function onKeyClick(event) {
    if (event.code === 'Escape') {
      onModalClose();
    }
    console.log(refs.modal);
  }
})();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});
