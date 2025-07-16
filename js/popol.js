const slider = document.querySelector('.projects-slider');
const btnPrev = document.querySelector('.slide-btn.prev');
const btnNext = document.querySelector('.slide-btn.next');
const slideIndicator = document.querySelector('.slide-indicator');
const slides = document.querySelectorAll('.project-item');

const slideWidth = 600 + 32; // 600px 이미지 너비 + gap 2rem(32px)
const totalSlides = slides.length;

let currentIndex = 0;

// 현재 페이지 번호 업데이트
function updateIndicator() {
  slideIndicator.textContent = `${currentIndex + 1}/${totalSlides}`;
}

// 슬라이드 이동 함수
function slideTo(index) {
  slider.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
  currentIndex = index;
  updateIndicator();
}

// 이전 버튼 클릭
btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  }
});

// 다음 버튼 클릭
btnNext.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    slideTo(currentIndex + 1);
  }
});

// 초기 표시
updateIndicator();
