window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s",
  });

  const btns = document.querySelectorAll("main ul li");

  for (let el of btns) {
    el.addEventListener("click", e => {
      e.preventDefault();

    // 변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
    const sort = e.currentTarget.querySelector("a").getAttribute("href");

    // grid에 저장된 결괏값을 불러와 재정렬 기능 연결
    grid.arrange({
      filter: sort
    });

    // 다시 모든 버튼의 개수만큼 반복해서
    for(let of btns) {
      // 각 버튼의 클래스명 'on'을 제거해 비활성화
      el.classList.remove(on);
    }

    // 클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
    e.currentTarget.classList.add("on");
    })
  }
});
