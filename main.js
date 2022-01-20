const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// fetch('https://tiendavirtualmern.herokuapp.com/api',{
// })
signUpButton.addEventListener('click', () => {
  const nuevoUser = {
    name: '',
    email: '',
    password: '',
  };
  console.log(nuevoUser);
  // fetch ('https://tiendavirtualmern.herokuapp.com/api/users',{
  //   method: 'POST',
  //   body: JSON.stringify(nuevoUser),
  //   headers: {}
  // })
})