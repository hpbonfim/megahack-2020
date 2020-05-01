import { AbstractControl } from '@angular/forms';

const validationMessages = {
  required: 'Campo obrigatório',
  email: 'Informe um e-mail válido',
  confirmPassword: 'Confirmação da senha deve ser idêntico ao campo senha'
};

function messageFormValidation(formControl: AbstractControl) {
  const [ error ] = Object.keys(formControl.errors || {}) || [];

  return validationMessages[error];
}

export default messageFormValidation;
