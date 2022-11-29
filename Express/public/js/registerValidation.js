window.onload = function () {
  let form = document.querySelector("#registerForm");
  let name = document.querySelector("#registerName");
  let lastName = document.querySelector("#registerLastName");
  let email = document.querySelector("#registerEmail");
  let adress = document.querySelector("#registerAdress");
  let password = document.querySelector("#registerPassword");
  let file = document.querySelector("#image");

  name.focus();

  form.addEventListener("submit", function (e) {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = [];

    if (name.value == "") {
      errors.push("El campo nombre es obligatorio");
      name.classList.add("is-invalid");
    }
    if (name.value.length < 1 && name.value.length > 0) {
      errors.push("Nombre muy corto");
      name.classList.add("is-invalid");
    } else {
      name.classList.remove("is-invalid");
      name.classList.add("is-valid");
      lastName.focus();
    }

    if (lastName.value == "") {
      errors.push("El campo apellido es obligatorio");
      lastName.classList.add("is-invalid");
    }
    if (lastName.value.length < 2 && lastName.value.length > 0) {
      errors.push("Apellido muy corto");
      lastName.classList.add("is-invalid");
    } else {
      lastName.classList.remove("is-invalid");
      lastName.classList.add("is-valid");
      email.focus();
    }

    if (reg.test(email.value) === false && email.value !== "") {
      errors.push("El email no es valido");
      email.classList.add("is-invalid");
    }
    if (email.value == "") {
      errors.push("El campo email es obligatorio");
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      email.focus();
    }

    if (password.value == "") {
      errors.push("El campo contraseña es obligatorio");
      name.classList.add("is-invalid");
    }
    if (password.value.length < 8 && password.value.length > 0) {
      errors.push("Contraseña muy corta");
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let filePath = file.value;

    if (!allowedExtensions.exec(filePath)) {
      errors.push("Por favor usar una extension valida");
      file.classList.add("is-invalid");
    } else {
      file.classList.remove("is-invalid");
      file.classList.add("is-valid");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let errores = document.querySelector(".errores");
      errores.classList.add("alert-warning");
      errores.innerHTML = "";

      for (let i = 0; i < errors.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = errors[i];
        errores.appendChild(li);
      }
    } else {
    }
  });
};
