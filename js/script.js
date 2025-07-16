// 외부 슬라이드
const outerSwiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  effect: 'slide',
});

// 내부 슬라이드 (버튼 없이 페이지네이션만)
new Swiper('.inner-swiper', {
  pagination: {
    el: '.inner-pagination',
    clickable: true,
  },
  nested: true,
  spaceBetween: 10,
  effect: 'slide',
});
