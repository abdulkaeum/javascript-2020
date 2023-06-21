const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// get dataset from el and use it to find el via el id

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (!id) return;

  btns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");

  articles.forEach(function (article) {
    article.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
});
