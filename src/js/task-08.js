const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  console.log(email, password);

  if (email === " " || password === " ") {
    alert("Заповніть, будь ласка, всі поля");
    return;
  }

  const formElement = {
    email,
    password,
  };
  console.log(formElement);
  form.reset();
}

// const formData = new FormData(event.currentTarget);

// formData.forEach((email, password) => {
// console.log("name", password);
// console.log("name", email);
// });
