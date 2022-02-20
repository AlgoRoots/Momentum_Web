const loginWindow = document.querySelector("#login_window");
const loginInput = document.querySelector(".login_input");
const btn = document.querySelector(".login_btn");
const name = document.querySelector(".name_input");

const USERNAME_KEY = "username";
loginInput.focus();
function onLoginSubmit(event) {
  event.preventDefault();
  loginWindow.style.display = "none";
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  if (username === "") {
    name.innerText = `Hello, Stranger!`;
  } else {
    name.innerHTML = `Have a Good Day,<br/> ${username}!`;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginWindow.addEventListener("submit", onLoginSubmit);
} else {
  loginWindow.style.display = "none";
  paintGreetings(savedUsername);
}

btn.addEventListener("click", onLoginSubmit);
