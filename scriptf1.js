const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input[required]");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
    }
  });

  const agencySelected = form.querySelector('input[name="agency"]:checked');

  if (!agencySelected) {
    valid = false;
  }

  if (valid) {
    alert("Account created successfully!");
  } else {
    alert("Please fill all required fields!");
  }
});