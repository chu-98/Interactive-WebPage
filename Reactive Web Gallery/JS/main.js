const frame = "section";
const box = "article";
const speed = "0.5s";
const activeClass = "on";
const btn = document.querySelectorAll(".menu li");
let grid;

window.addEventListener("load", () => {
  init(); // 화면 초기화 함수 호출
  filter(btn); // 정렬 버튼 기능의 함수 호출
});

// 화면 초기화 함수 정의
function init() {
  // 변수 grid에 담길 결괏값이 다른 함수인 filter에서도 활용되어야 하므로
  // 전역 변수로 선언
  grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    transitionDuration: speed,
  });
}

// 정렬 버튼 기능의 함수 정의
function filter(arr) {
  for (let el of arr) {
    el.addEventListener("click", e => {
      e.preventDefault();

      // 변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      // grid에 저장된 결괏값을 불러와 재정렬 기능 연결
      grid.arrange({
        filter: sort,
      });

      for (let el of arr) {
        el.classList.remove(activeClass);
      }
      e.currentTarget.classList.add(activeClass);
    });
  }
}
