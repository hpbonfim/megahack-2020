import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import markForm from '../../shared/functions/mark-form.function';
import messageFormValidation from '../../shared/functions/form-message-validation.function';
import { UserConfirmationSmsService } from './user-confirmation-sms.service';
import { User } from '../../shared/models/user.model';
import { UserConfirmationCodeService } from './user-confirmation-code.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.scss'],
})
export class UserConfirmationComponent implements OnInit {
  form: FormGroup;
  phoneNumber: string;
  user: User;
  faPaperPlane = faPaperPlane;

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private userConfirmationSmsService: UserConfirmationSmsService,
    private userConfirmationCodeService: UserConfirmationCodeService
  ) {}

  ngOnInit(): void {
    this.phoneNumber = this.userDataService.getPhoneNumber();
    this.user = this.userDataService.getUserData();

    this.createForm();
  }

  handleSubmit = async () => {
    const { _id } = this.user;
    markForm(this.form);
    if (this.form.invalid) {
      return;
    }

    const data = { ...this.form.value, _id };

    const { verification } = await this.userConfirmationCodeService
      .post(data)
      .toPromise();

    if (verification) {
      Swal.fire('Sucesso', 'Códico validado!', 'success').then(() => {
        this.router.navigate(['/user-shell']);
      });
    }
  };

  handleSendAgain = async () => {
    const { _id } = this.user;
    markForm(this.form);
    if (this.form.invalid) {
      return;
    }

    await this.userConfirmationSmsService.post({ _id }).toPromise();

    Swal.fire('Sucesso', 'SMS enviado!', 'success');
  };

  getErrorMessage = (controlName) =>
    messageFormValidation(this.form.get(controlName));

  private createForm() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
    });
  }
}
