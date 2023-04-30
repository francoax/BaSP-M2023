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
          this.errorMessage = 'Name must be only letters';
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
        if(input.value) {
          var date = input.value.split('-');
          var now = new Date();
          if(parseInt(date[0]) > now.getFullYear()) {
            this.errorMessage = 'Date year not valid.';
            return false;
          }
          if((parseInt(date[0]) < 1950) || (parseInt(date[0]) > 2010)) {
            this.errorMessage = 'Only years between 1950 and 2010';
            return false;
          }
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
          this.errorMessage = 'Telephone must have 10 numbers';
          return false;
        }
        if(input.value && !hasOnlyNumbers(input.value)) {
          this.errorMessage = 'Telephone must be only numbers';
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
          for (var i = 0; i < street.length; i++) {
            var char = street.charCodeAt(i);
            if(
              !(char >= 65 && char <= 90)
              && !(char >= 97 && char <= 122)
              && !(char >=48 && char <=57)
              && !(char === 46)
              && !(char === 32)) {
              this.errorMessage = 'Direction street have invalid caracters';
              return false;
            }
          }
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
            if(
              !(char >= 65 && char <= 90)
              && !(char >= 97 && char <= 122)
              && !(char >= 48 && char <=57)) {
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
          if(input.value.length < 7) {
            this.errorMessage = 'Password must have 7 or more caracters';
            return false
          }
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
        var input = formGroups[i].querySelector('.form-input');
        var label = formGroups[i].querySelector('.form-label').textContent;
        if(input.getAttribute('id') !== 'date-born') {
          message += label.trim() + ': ' + input.value + '\n';
        } else {
          var date = input.value.split('-');
          date = date[2] + '/' + date[1] + '/' + date[0];
          message += label.trim() + ': ' + date + '\n';
        }
      }

      var name = formElement.querySelector('#name').value;
      var lastname = formElement.querySelector('#lastname').value;
      var dni = formElement.querySelector('#dni').value;
      var dob = formElement.querySelector('#date-born').value;
      dobSplitted = dob.split('-');
      var tel = formElement.querySelector('#tel').value;
      var direction = formElement.querySelector('#direction').value;
      var city = formElement.querySelector('#city').value;
      var zip = formElement.querySelector('#postal-code').value;
      var email = formElement.querySelector('#email').value;
      var password = formElement.querySelector('#password').value;

      fetch('https://api-rest-server.vercel.app/signup?'
      + 'name=' + name
      + '&lastName=' + lastname
      + '&dni=' + dni
      + '&dob=' + dobSplitted[1] + '/' + dobSplitted[2] + '/' + dobSplitted[0]
      + '&phone=' + tel
      + '&address=' + direction
      + '&city=' + city
      + '&zip=' + zip
      + '&email=' + email
      + '&password=' + password
      )
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        if(data.success) {
          showModalMsg('Successful request!', data.msg);
          localStorage.setItem('name', name);
          localStorage.setItem('lastname', lastname);
          localStorage.setItem('dni', dni);
          localStorage.setItem('dob', dob);
          localStorage.setItem('phone', tel);
          localStorage.setItem('address', direction);
          localStorage.setItem('city', city);
          localStorage.setItem('zip', zip);
          localStorage.setItem('email', email);
        } else {
          let msg = '';
          data.errors.forEach(function(error) {
            msg += error.msg + '\n';
          })
          throw new Error(msg);
        }
      })
      .catch(function(error) {
        showModalMsg('Something wents wrong', error.message);
      })
      alert('Nice, you got it: \n' + message);
    }
  });
}

validateForm('#sign-up-form');

window.onload = () => {
  document.querySelector('#name').value = localStorage.getItem('name');
  document.querySelector('#lastname').value = localStorage.getItem('lastname');
  document.querySelector('#dni').value = localStorage.getItem('dni');
  document.querySelector('#date-born').value = localStorage.getItem('dob');
  document.querySelector('#tel').value = localStorage.getItem('phone');
  document.querySelector('#direction').value = localStorage.getItem('address');
  document.querySelector('#city').value = localStorage.getItem('city');
  document.querySelector('#postal-code').value = localStorage.getItem('zip');
  document.querySelector('#email').value = localStorage.getItem('email');
}

var crossModalClose = document.querySelector('.modal-close');
var modal = document.querySelector('#modal-msg');
var btnModalClose = modal.querySelector('#btn-ok');

crossModalClose.addEventListener('click', function(event) {
  modal.style.display = 'none';
})

btnModalClose.addEventListener('click', function(event) {
  modal.style.display = 'none';
})

window.onclick = function(event) {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
}

function showModalMsg(title, msg) {
  var modalTitle = modal.querySelector('.modal-title > p');
  var content = modal.querySelector('#modal-details');
  modal.style.display = 'block';
  modalTitle.innerText = title;
  content.innerText = msg;
}
