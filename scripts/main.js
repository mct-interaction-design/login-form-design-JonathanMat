const init = function () {
  const passwordToggle = document.querySelector('.js-password-toggle');
  const passwordField = document.querySelector('#password');
  const visibleIcon = document.querySelector('.c-input__icon-visible');
  const hiddenIcon = document.querySelector('.c-input__icon-hidden');

  if (passwordToggle && passwordField && visibleIcon && hiddenIcon) {
    passwordToggle.addEventListener('click', function () {
      // Toggle password field type
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        // Show crossed-out eye icon
        visibleIcon.style.display = 'none';
        hiddenIcon.style.display = 'block';
        passwordToggle.setAttribute('aria-label', 'Hide password');
      } else {
        passwordField.type = 'password';
        // Show normal eye icon
        visibleIcon.style.display = 'block';
        hiddenIcon.style.display = 'none';
        passwordToggle.setAttribute('aria-label', 'Show password');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', init);
