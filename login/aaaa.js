
function validarInicioSesion() {
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;
  if (email === '' || contraseña === '') {
      alert('Por favor, introduce tu correo y contraseña.');
      return false; // Evita el envío del formulario
    }


    if (email === 'sena@gmail.com' && contraseña === 'soysena') {
      alert('Inicio de sesión exitoso.');
      window.location.href = '../index.html';
      return false; // Permite el envío del formulario
      }


      if (usuario === 'ADMIN@gmail.com' && contraseña === '1234') {
          alert('Has iniciado sesion como Admin.');
          window.location.href = '../index.html';
          return false; // Permite el envío del formulario
         }

         else if (email === 'pepito@gmail') {
          alert('Contraseña incorrecta.');
          return false; // Evita el envío del formulario
        } else if (contraseña === 'nosoysena') {
          alert('Usuario incorrecto.');
          return false; // Evita el envío del formulario
        } else {
          alert('Usuario y contraseña incorrectos.');
          return false; // Evita el envío del formulario
        }
      }
