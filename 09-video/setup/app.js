// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

btn.addEventListener("click", function () {
  // add class slide to the button, which will move the 3rd span with class switch 50% from the left
  btn.classList.toggle("slide");

  btn.classList.contains("slide") ? video.pause() : video.play();
});
