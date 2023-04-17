$(document).ready(function() {
  $('#toggle').click(function() {
    $('body').toggleClass('dark-mode');
  });
});

const form = document.getElementById("form");
const deleteAllBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const jsonData = document.getElementById("jsonData");


const formElement = document.getElementById('form');

function printFormData() {
  const formData = new FormData(formElement);
  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }
}

// Validate the form on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const cpf = document.getElementById("cpf");
  const age = document.getElementById("age");
  const cep = document.getElementById("cep");
  const birth = document.getElementById("birthDate");
  const state = document.getElementById("estado");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Check if all fields are filled in
  if (name.value === "" || cpf.value === "" || age.value === "" || estado.value === "" || cep.value ==="" || birth.value === "" || phone.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
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
    birth: birth.value,
    cep: cep.value,
    state: state.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  // Convert the object to JSON and display it in the textarea
  jsonData.value = JSON.stringify(formData);
  printFormData();
});

// Clear the form and JSON data on "Delete All" click
deleteAllBtn.addEventListener("click", function () {
  form.reset();
  jsonData.value = "";
});
