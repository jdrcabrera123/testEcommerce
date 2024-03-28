const showMenu = document.querySelector(".material-symbols-outlined");
const closeMenu = document.querySelector(".closedLi");
const menu = document.querySelector(".menu");
const user = JSON.parse(localStorage.getItem("login_sucess")) || false;
// if (!user) {
//   window.location.href = "login.html";
// }

showMenu.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
});

// closeMenu.addEventListener("click", () => {
//   menu.classList.remove("showMenu");
// });



const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert("Good bye");
  localStorage.removeItem("login_sucess");
  window.location.href = "login.html";
});
