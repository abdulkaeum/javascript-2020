const sidebar = document.querySelector(".sidebar");

[".close-btn", ".sidebar-toggle"].forEach(function (event) {
  document.querySelector(event).addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
  });
});
