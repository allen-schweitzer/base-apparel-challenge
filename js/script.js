document.querySelector('.email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('.email-input');
    const errorMsg = document.getElementById('error-msg');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailInput.value || !emailPattern.test(emailInput.value)) {
      errorMsg.style.display = 'block';
      emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
    } else {
      errorMsg.style.display = 'none';
      emailInput.style.borderColor = 'hsl(0, 36%, 70%)';
      alert('Thank you for subscribing!');
      emailInput.value = '';
    }
  });
  