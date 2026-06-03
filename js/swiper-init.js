// Ініціалізація основної каруселі за ідентифікатором #sw-01

// const swiper = new Swiper('#sw-01', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     // type: 'bullets',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// // And if we need scrollbar
// //   scrollbar: {
// //     el: '.swiper-scrollbar',
// //   },
// });


// // Приклад ініціалізації додаткової каруселі за класом .slider

// const swiper_new = new Swiper('.slider', {
//   // Optional parameters
//   loop: true,
//   slidesPerView: 4,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   //   clickable: true,
//   // },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// // And if we need scrollbar
// //   scrollbar: {
// //     el: '.swiper-scrollbar',
// //   },
// breakpoints: {
//     // when window width is >= 320px
//     300: {
//       pagination: false,
//       slidesPerView: 2,
//       spaceBetween: 45
//     },
//     420: {
//       pagination: false,
//       slidesPerView: 2,
//       spaceBetween: 65
//     },
//     620: {
//       slidesPerView: 3,
//       spaceBetween: 75
//     },
//     769: {
//       slidesPerView: 3,
//       spaceBetween: 75
//     },
//     880: {
//       slidesPerView: 3,
//       spaceBetween: 90
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 90
//     },
//     1300: {
//       slidesPerView: 4,
//       spaceBetween: 95
//     }
//   }
// });

// Ініціалізація каруселі галереї мемів (секція 3)

const swiperS3 = new Swiper('#sw-s3', {
  loop: true,
  slidesPerView: 3,

  pagination: {
    el: '#sw-s3 .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#sw-s3 .swiper-button-next',
    prevEl: '#sw-s3 .swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1350: {
      slidesPerView: 3,
    },
  },
});