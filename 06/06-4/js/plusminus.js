const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0;  // 제어할 숫자값을 0으로 초기화

// btnPlus를 클릭할 때마다
btnPlus.addEventListener("click", e => {
  e.preventDefault();
  // num 값을 1씩 증가
  num++;
  console.log(num);
});

// btnMinus를 클릭할 때마다
btnMinus.addEventListener("click", e => {
  e.preventDefault();
  // num 값을 1씩 감소
  num--;
  console.log(num);
})