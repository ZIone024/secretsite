function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const correctPassword = '7533'; // Пароль для доступа
  const errorMessage = document.getElementById('error-message');
  const content = document.getElementById('content');

  if (passwordInput === correctPassword) {
    document.getElementById('login-form').style.display = 'none';
    content.style.display = 'block';
  } else {
    errorMessage.style.display = 'block';
  }
}
