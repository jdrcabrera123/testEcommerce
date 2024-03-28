const LoginForm = document.querySelector("#loginForm");
LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = Users.find(
    (user) => user.email == email && user.password == password
  );

  if (!validUser) {
    return alert("Incorrect username and/or password");
  }

  alert(`Welcome ${validUser.name}`);

  localStorage.setItem("login_sucess", JSON.stringify(validUser));
  window.location.href = "index.html";
});
