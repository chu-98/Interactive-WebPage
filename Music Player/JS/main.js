const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; // 각각의 article 요소가 회전할 각도
const len = lists.length - 1; // 순번이 0부터 시작하므로 전체 개수에서 1을 뺌
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");

let num = 0;
let i = 0;
let active = 0;

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;

  active == 0 ? (active = len) : active--;
  activation(active, lists);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == len ? (active = 0) : active++;
  activation(active, lists);
});

function activation(index, lists) {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

function initMusic() {
  for (let el of audio) {
    el.pause();
    el.load();
    el.parentElement.previousElementSibling.classList.remove("on");
  }
}

// article의 개수만큼 반복
for (let el of lists) {
  let pic = el.querySelector(".pic");
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  // play 버튼 클릭 시
  play.addEventListener("click", e => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      // play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

  // pause 버튼 클릭 시
  pause.addEventListener("click", e => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      // play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  // load 버튼 클릭 시
  load.addEventListener("click", e => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      // play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

  // 각 article 요소를 45도씩 회전하고 아래로 배치
  el.style.transform = `rotate(${deg * i}deg) translateY(-90vh)`;
  pic.style.backgroundImage = `url(img/member${
    i + 1
  }.jpg)`; /* 배경 이미지 추가 */
  i++;
}
