var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
  signUp();
});

var btnRegister = document.querySelector("#registerBtn");
var btnLogin = document.querySelector("#loginBtn");

btnRegister.addEventListener("click", function () {
  signUp();
});

btnLogin.addEventListener("click", function () {
  signIn();
});

function signIn() {
  let emailEl = document.querySelector("#email");
  let passwordEl = document.querySelector("#senha");

  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  // check if stored data from register-form is equal to data from login form
  if (emailEl.value == storedEmail && passwordEl.value == storedPassword) {
    alert("You are logged in.");
    window.location.href = "http://www.devmedia.com.br";
  } else {
    alert("ERROR.");
  }
}

function signUp() {
  let emailEl = document.querySelector("#email2");
  let passwordEl = document.querySelector("#senha2");
  let nameEl = document.querySelector("#nome");
  localStorage.setItem("email", emailEl.value);
  localStorage.setItem("password", passwordEl.value);
  localStorage.setItem("username", nameEl.value);
}
