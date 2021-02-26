const header = document.querySelector(".header");

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      header.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
});
