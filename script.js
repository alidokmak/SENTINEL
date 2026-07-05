// SENTINEL site — minimal JS: mobile menu toggle only. No dependencies.
document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("open");
});
// close menu after tapping a link (mobile)
document.querySelectorAll("#menu a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
  });
});
