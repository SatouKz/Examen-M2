const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const apiTienda = document.querySelector(".container");
const url = "https://tiendavirtualmern.herokuapp.com/api";
fetch(url).then((response) => console.log(response));

const signUpxButton = document.getElementById("signUpx");
const signInxButton = document.getElementById("signInx");
// Register
signUpxButton.addEventListener("click", function ssRegister() {
  function usuario(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  let nameCapture = document.getElementById("name").value;
  let emailCapture = document.getElementById("email").value;
  let passCapture = document.getElementById("password").value;
  // console.log(nameCapture + " " + emailCapture + " " + passCapture);
  // Creación de objeto en base a los datos del usuario
  const nuevoUsuario = new usuario(nameCapture, emailCapture, passCapture);
  // console.log(nuevoUsuario);
  // console.log(JSON.stringify(nuevoUsuario));
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  alert("Usuario creado exitosamente");
});
//LOGIN
signInxButton.addEventListener("click", function ssLogin() {
  function user(email, password) {
    this.email = email;
    this.password = password;
  }
  let emailLogin = document.getElementById("emailLogin").value;
  let passLogin = document.getElementById("passwordLogin").value;
  const userLogin = new user(emailLogin, passLogin);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users/login", {
    method: "POST",
    body: JSON.stringify(userLogin),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
    alert("Inicio de sesion exitoso")
});
// Code by: SatouKz