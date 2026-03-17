const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("loginBtn");
const form = document.getElementById("loginForm");

function validate() {
  if (email.value.trim() !== "" && password.value.trim() !== "") {
    button.classList.add("active");
    button.disabled = false;
  } else {
    button.classList.remove("active");
    button.disabled = true;
  }
}

email.addEventListener("input", validate);
password.addEventListener("input", validate);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!button.disabled) {
    alert("Login Successful!");
  }
});