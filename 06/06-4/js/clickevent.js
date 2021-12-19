/* const link = document.querySelector("a");

link.addEventListener("click", () => {
  console.log("링크를 클릭했습니다.");
}); */


const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
});