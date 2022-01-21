const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUpxButton = document.getElementById("signUpx");
const signInxButton = document.getElementById("signInx");

function capturar() {
  function usuario(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  let nameCapture = document.getElementById("name").value;
  let emailCapture = document.getElementById("email").value;
  let passCapture = document.getElementById("password").value;
  // console.log(nameCapture + " " + emailCapture + " " + passCapture);
  const nuevoUsuario = new usuario(nameCapture, emailCapture, passCapture);
  console.log(nuevoUsuario);
}
