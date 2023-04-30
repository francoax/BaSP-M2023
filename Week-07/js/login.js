var validateForm = function(form) {
  var formElement = document.querySelector(form);
  var inputsValidations = [
    {
      inputForm : 'email',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Email is required';
          return false;
        }
        var emailExpression = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
        if(!emailExpression.test(input.value)) {
          this.errorMessage = 'Email invalid.';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'password',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Password is required';
          return false;
        }
        if(input.value) {
          if(!(input.value.indexOf(' ') === -1)) {
            this.errorMessage = 'Password must not have empty spaces';
            return false;
          }
        }
        return true;
      }
    }
  ]

  var validateFormGroup = function(formGroup) {
    var input = formGroup.querySelector('input');
    var label = formGroup.querySelector('label');
    var span = formGroup.querySelector('span');

    input.addEventListener('focus', function(e) {
      input.classList.remove('input-error');
      label.classList.remove('label-error');
      span.classList.add('is-hidden');
    });

    var formGroupError = false;
    for (var i = 0; i < inputsValidations.length; i++) {
      if(input.getAttribute('id') === inputsValidations[i].inputForm && !inputsValidations[i].isValid(input)) {
        input.classList.add('input-error');
        label.classList.add('label-error');
        span.classList.remove('is-hidden');
        span.innerText = inputsValidations[i].errorMessage;
        formGroupError = true;
      }
    }
    return !formGroupError;
  }

  Array.from(formElement.elements).forEach(function(element) {
    element.addEventListener('blur', function(e) {
      validateFormGroup(e.target.parentElement);
    })
  })

  formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    var inputsErrors = [];
    var message = '';
    var formGroups = Array.from(formElement.querySelectorAll('.form-group'));
    for (var i = 0; i < formGroups.length; i++) {
      var error = validateFormGroup(formGroups[i]);
      if(!error) {
        inputsErrors.push(formGroups[i].querySelector('.form-input').getAttribute('id'));
      }
    }
    if(inputsErrors.length !== 0) {
      inputsValidations.forEach(function(input) {
        for (var i = 0; i < inputsErrors.length; i++) {
          if(input.inputForm === inputsErrors[i]) {
            message += input.errorMessage + '\n';
          }
        }
      })
      alert('Oops, I see you have errors: \n' + message);
    } else {
      for (var i = 0; i < formGroups.length; i++) {
        var input = formGroups[i].querySelector('.form-input').value;
        var label = formGroups[i].querySelector('.form-label').textContent;
        message += label.trim() + ': ' + input + '\n';
      }
      var email = formElement.querySelector('#email').value;
      var pass = formElement.querySelector('#password').value;

      fetch('https://api-rest-server.vercel.app/login?email=' + email + '&password=' + pass)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if(!data.success) {
          if(data.msg) {
            throw new Error(data.msg)
          }
          let msg = '';
          data.errors.forEach(error => {
            msg += '\n' + error.msg;
          });
          throw new Error(msg);
        } else {
          alert('Request successful! \n' + data.msg);
        }
      })
      .catch(error => {
        alert(error.message);
      })
      alert('Nice you got it \n' + message);
    }
  })
}

validateForm('#login-form');