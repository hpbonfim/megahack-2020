import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import markForm from '../../shared/functions/mark-form.function';
import messageFormValidation from '../../shared/functions/form-message-validation.function';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.fillForm();
  }

  handleSubmit = async () => {
    markForm(this.form);

    if (this.form.invalid) {
      return;
    }

    const user = await this.loginService.post(this.form.value).toPromise();

    this.redirectUser(user);
  };

  getErrorMessage = (controlName) =>
    messageFormValidation(this.form.get(controlName));

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  private fillForm() {
    const { queryParams } = this.activatedRoute.snapshot;
    const { email } = queryParams;

    if (email) {
      this.form.get('email').setValue(email);
    }
  }

  private redirectUser(user: User) {
    const formattedPhone = user.stateCode + user.phoneNumber;
    const navigate = user.verified ? '/user-shell' : '/user-confirmation';

    this.userDataService.setPhoneNumber(formattedPhone);
    this.userDataService.setUserData(user);
    this.router.navigate([navigate]);
  }
}
