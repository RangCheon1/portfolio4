document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.projects-slider');
  const items = document.querySelectorAll('.project-item');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  const indicator = document.querySelector('.slide-indicator');

  let index = 0;
  const total = items.length;
  let itemWidth = items[0].offsetWidth + 20; // margin 포함

  // ✅ 슬라이드 업데이트 함수
  function updateSlide() {
    slider.style.transform = `translateX(-${index * itemWidth}px)`;
    indicator.textContent = `${index + 1}/${total}`;
  }

  // ✅ 윈도우 리사이즈 시 itemWidth 재계산
  window.addEventListener('resize', () => {
    itemWidth = items[0].offsetWidth + 20;
    updateSlide();
  });

  // ✅ 이전 버튼
  prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : total - 1;
    updateSlide();
  });

  // ✅ 다음 버튼
  nextBtn.addEventListener('click', () => {
    index = (index < total - 1) ? index + 1 : 0;
    updateSlide();
  });

  // ✅ 초기 상태 설정
  updateSlide();
});
