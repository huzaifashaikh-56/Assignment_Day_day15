const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");
const dataList = document.getElementById("dataList");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Simple validation
  if (!name || !email || !phone) {
    message.textContent = "All fields are required!";
    message.className = "error";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "Invalid email format!";
    message.className = "error";
    return;
  }

  // Show success message
  message.textContent = "Form submitted successfully!";
  message.className = "success";

  // Add data to list below the form
  const li = document.createElement("li");
  li.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
  dataList.appendChild(li);

  // Reset form
  form.reset();
});

// Clear button functionality
clearBtn.addEventListener("click", function () {
  form.reset();
  message.textContent = "";
});
