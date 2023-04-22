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
          this.errorMessage = 'Lastname is required';
          return false;
        }
        if(input.value && input.value.length <= 3) {
          this.errorMessage = 'Lastname must has more than 3 letters';
          return false;
        }
        if(input.value && !hasOnlyLetters(input.value)) {
          this.errorMessage = 'Lastname can contain only letters';
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
        if(input.value && input.value.length <= 7) {
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
    // {
    //   inputForm : 'date-born',
    //   isValid : function(input) {}
    // },
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
        // Al menos 5 caracteres con letras, números y un espacio en el medio.
        if(!input.value) {
          this.errorMessage = 'Direction is required';
          return false;
        }
        if(input.value) {
          if(input.value.indexOf(' ') === -1) {
            this.errorMessage = 'Direction not valid';
            return false;
          }
          var letters = 0;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
              letters++;
            }
          }
          if(letters < 5) {
            this.errorMessage = 'Direction not valid. Must have 5 letters';
            return false;
          }
          var numbers = 0;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
              numbers++;
            }
          }
          if(numbers < 3) {
            this.errorMessage = 'Direction must containt at least three numbers.';
            return false;
          }
        }
        return true;
      }
    },
    // {
    //   inputForm : 'city',
    //   isValid : function(input) {}
    // },
    // {
    //   inputForm : 'postal-code',
    //   isValid : function(input) {}
    // },
    // {
    //   inputForm : 'email',
    //   isValid : function(input) {
    //     var emailExpression = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
    //     return emailExpression.test(input.value);
    //   }
    // },
    // {
    //   inputForm : 'password',
    //   isValid : function(input) {}
    // },
    // {
    //   inputForm : 'repeated-password',
    //   isValid : function(input) {return input.value}
    // }
  ];

  var validateFormGroup = function(formGroup) {
    var input = formGroup.querySelector('input');
    var label = formGroup.querySelector('label');

    input.addEventListener('focus', function(e) {
      input.classList.remove('input-error');
      label.classList.remove('label-error');
    });

    var formGroupError = false;
    for (var i = 0; i < inputsValidations.length; i++) {
      if(input.getAttribute('id') === inputsValidations[i].inputForm && !inputsValidations[i].isValid(input)) {
        input.classList.add('input-error');
        label.classList.add('label-error');
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
      alert('Nice, you got it')
    }
  });
}

validateForm('#sign-up-form');