import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import markForm from '../../shared/functions/mark-form.function';
import messageFormValidation from '../../shared/functions/form-message-validation.function';
import { UserRegistersService } from './user-registers.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserConfirmationSmsService } from '../user-confirmation/user-confirmation-sms.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private userRegistersService: UserRegistersService,
    private userDataService: UserDataService,
    private userConfirmationSmsService: UserConfirmationSmsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  handleSubmit = async () => {
    markForm(this.form);

    if (!this.formValidation() || this.form.invalid) {
      return;
    }

    const { message, result } = await this.userRegistersService
      .post(this.formatObject())
      .toPromise();

    if (result) {
      Swal.fire('Sucesso', 'Cadastro realizado!', 'success').then(() => {
        this.sendSmsAndRedirect(result);
      });
    }
  };

  getErrorMessage = (controlName) =>
    messageFormValidation(this.form.get(controlName));

  goBack = () => window.history.back();

  private createForm() {
    this.form = new FormGroup({
      userName: new FormControl('usr'),
      fullName: new FormControl('', Validators.required),
      countryCode: new FormControl('55'),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  private formatObject() {
    const { phone } = this.form.value;
    const phoneNumber = phone.substring(2);
    const stateCode = phone.substring(0, 2);

    return { ...this.form.value, phoneNumber, stateCode };
  }

  private formValidation() {
    const { password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      this.form.get('confirmPassword').setErrors({ confirmPassword: true });
      return;
    }
    return true;
  }

  private async sendSmsAndRedirect(user: User) {
    const { _id, stateCode, phoneNumber } = user;
    const phone = stateCode + phoneNumber;

    await this.userConfirmationSmsService.post({ _id }).toPromise();

    this.userDataService.setPhoneNumber(phone);
    this.userDataService.setUserData(user);
    this.router.navigate([`/user-confirmation`]);
  }
}
