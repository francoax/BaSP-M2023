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
          // if(input.value.length < 8) {
          //   this.errorMessage = 'Password must have 8 or more caracters';
          //   return false
          // }
          // var hasMayus = false;
          // for (var i = 0; i < input.value.length; i++) {
          //   var char = input.value.charCodeAt(i);
          //   if((char >= 65 && char <= 90)) {
          //     hasMayus = true;
          //   }
          // }
          // if(!hasMayus) {
          //   this.errorMessage = 'Password must contain one uppercase letter';
          //   return false;
          // }
          // var numbers = 0;
          // for (var i = 0; i < input.value.length; i++) {
          //   var char = input.value.charCodeAt(i);
          //   if((char >= 48 && char <= 57)) {
          //     numbers++
          //   }
          // }
          // if(numbers < 2) {
          //   this.errorMessage = 'Password must contain two or more numbers';
          //   return false;
          // }
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
    var inputsErrors = [];
    var message = '';
    e.preventDefault();
    var formGroups = Array.from(formElement.querySelectorAll('.form-group'));
    console.log(formGroups);
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
      alert('Nice, you got it: \n' + message);
    }
  })
}

validateForm('#login-form');