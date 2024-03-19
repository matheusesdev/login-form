let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("my-email");
  let password = document.querySelector("password");

  console.log("Email", email.value);
  console.log("Password", password.value);
});
