import { FormGroup } from '@angular/forms';

function markForm(form: FormGroup) {
  Object.keys(form.value)
  .forEach((control) => {
    form.get(control).markAsTouched();
  });
}

export default markForm;