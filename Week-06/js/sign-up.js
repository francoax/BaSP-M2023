function hasOnlyLetters(value) {
  for (var i = 0; i < value.length; i++) {
    var char = value.charCodeAt(i);
    if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122)) {
      return false;
    }
  }
  return true;
}

function hasOnlyNumbers(value) {
  for (var i = 0; i < value.length; i++) {
    if (isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true;
}

var validateForm = function(form) {
  var formElement = document.querySelector(form);
  var inputsValidations = [
    {
      inputForm : 'name',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Name is required';
          return false;
        }
        if(input.value && input.value.length <= 3) {
          this.errorMessage = 'Name must has more than 3 letters';
          return false;
        }
        if(input.value && !hasOnlyLetters(input.value)) {
          this.errorMessage = 'Name can contain only letters';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'lastname',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Last name is required';
          return false;
        }
        if(input.value && input.value.length <= 3) {
          this.errorMessage = 'Last name must has more than 3 letters';
          return false;
        }
        if(input.value && !hasOnlyLetters(input.value)) {
          this.errorMessage = 'Last name can contain only letters';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'dni',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'DNI is required';
          return false;
        }
        if(input.value && (input.value.length < 7) || (input.value.length > 8)) {
          this.errorMessage = 'DNI is not valid';
          return false;
        }
        if(input.value && !hasOnlyNumbers(input.value)) {
          this.errorMessage = 'DNI can only have numbers';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'date-born',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Date born is required';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'tel',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Telephone is required';
          return false;
        }
        if(input.value && input.value.length !== 10) {
          this.errorMessage = 'Telephone not valid';
          return false;
        }
        if(input.value && !hasOnlyNumbers(input.value)) {
          this.errorMessage = 'Telephone can only have numbers';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'direction',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Direction is required';
          return false;
        }
        if(input.value) {
          if(input.value.indexOf(' ') === -1) {
            this.errorMessage = 'Direction not valid';
            return false;
          }
          var gap = input.value.lastIndexOf(' ');
          var street = input.value.substring(0, gap);
          var number = input.value.substring(gap + 1);
          if(street.length < 5) {
            this.errorMessage = 'Direction street must have more than 5 letters.';
            return false;
          }
          if(number.length < 2 || number.length > 4 || !hasOnlyNumbers(number)) {
            this.errorMessage = 'Direction number not valid.';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'city',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'City is required';
          return false;
        }
        if(input.value) {
          var notAlphanumeric = false;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if(!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122) && !(char >= 48 && char <=57)) {
              notAlphanumeric = true;
            }
          }
          if(notAlphanumeric) {
            this.errorMessage = 'City can only contain alphanumeric caracters';
            return false;
          }
          if(input.value.length < 3) {
            this.errorMessage = 'City must have more than 3 letters';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'postal-code',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Postal code is required';
          return false;
        }
        if(input.value) {
          if(!hasOnlyNumbers(input.value)) {
            this.errorMessage = 'Postal code can only have numbers';
            return false;
          }
          if(input.value.length < 4 || input.value.length > 5) {
            this.errorMessage = 'Postal code can only have 4 or 5 numbers';
            return false;
          }
        }
        return true;
      }
    },
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
          if(input.value.length < 8) {
            this.errorMessage = 'Password must have 8 or more caracters';
            return false
          }
          var hasMayus = false;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if((char >= 65 && char <= 90)) {
              hasMayus = true;
            }
          }
          if(!hasMayus) {
            this.errorMessage = 'Password must contain one uppercase letter';
            return false;
          }
          var numbers = 0;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if((char >= 48 && char <= 57)) {
              numbers++
            }
          }
          if(numbers < 2) {
            this.errorMessage = 'Password must contain two or more numbers';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'repeated-password',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Repeated password is required';
          return false;
        }
        if(input.value) {
          var password = formElement.querySelector('#password').value;
          if(input.value !== password) {
            this.errorMessage = "Passwords doesn't match";
            return false;
          }
        }
        return true;
      }
    }
  ];

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
        input.placeholder = 'You must complete this field.';
        formGroupError = true;
      }
    }
    return !formGroupError;
  }

  Array.from(formElement.elements).forEach(function(element) {
    element.addEventListener('blur', function(e) {
      validateFormGroup(e.srcElement.parentElement);
    })
  });

  formElement.addEventListener('submit', function(e) {
    var inputsErrors = [];
    var message = '';
    e.preventDefault();
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
      alert('Nice, you got it: \n' + message);
    }
  });
}

validateForm('#sign-up-form');