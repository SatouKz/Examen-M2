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

signUpxButton.addEventListener("click", function capturar() {
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
  console.log(JSON.stringify(nuevoUsuario));

fetch("https://tiendavirtualmern.herokuapp.com/api",{
  
})
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(data => console.log(data))
})
.catch(err => console.error(err))
