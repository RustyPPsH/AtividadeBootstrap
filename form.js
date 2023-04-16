const form = document.getElementById("myForm");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const jsonData = document.getElementById("jsonData");

// Validate the form on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const cpf = document.getElementById("cpf");
  const age = document.getElementById("age");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Check if all fields are filled in
  if (name.value === "" || cpf.value === "" || age.value === "" || phone.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
    alert("Por favor preencha todos os campos");
    return false;
  }

  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    alert("As senhas não conferem");
    return false;
  }

  // Create an object with the form data
  const formData = {
    name: name.value,
    cpf: cpf.value,
    age: age.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  // Convert the object to JSON and display it in the textarea
  jsonData.value = JSON.stringify(formData);
});

// Clear the form and JSON data on "Delete All" click
deleteAllBtn.addEventListener("click", function () {
  form.reset();
  jsonData.value = "";
});


// Toggle dark mode


