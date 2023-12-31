//using selectors inside the element

// traversing the dom
const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.closest(".question");
    question.classList.toggle("show-text");
  });
});
