import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { LoginService } from './login.service';
import markForm from '../shared/functions/mark-form.function';
import messageFormValidation from '../shared/functions/form-message-validation.function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  handleSubmit = async () => {
    markForm(this.form);

    if (this.form.invalid) { return; }

    const response = await this.loginService.create(this.form.value).toPromise();

    console.log(response);

  }

  getErrorMessage = (controlName) =>  messageFormValidation(this.form.get(controlName));

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

}
