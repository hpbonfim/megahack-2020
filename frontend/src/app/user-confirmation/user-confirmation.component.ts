import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { UserConfirmationService } from './user-confirmation.service';
import markForm from '../shared/functions/mark-form.function';
import messageFormValidation from '../shared/functions/form-message-validation.function';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.scss']
})
export class UserConfirmationComponent implements OnInit {
  form: FormGroup;
  phoneNumber: string;
  faPaperPlane = faPaperPlane;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userConfirmationService: UserConfirmationService
  ) { }

  ngOnInit(): void {
    const { params } = this.activatedRoute.snapshot;
    this.phoneNumber = params.phoneNumber;

    this.createForm();
  }

  handleSubmit = async () => {
    markForm(this.form);
    if (this.form.invalid) { return; }

    const response = await this.userConfirmationService.create(this.form.value).toPromise();

    console.log(response);

    this.router.navigate(['/user-menu']);
  }

  handleSendAgain = async () => {
    markForm(this.form);
    if (this.form.invalid) { return; }
  }

  getErrorMessage = (controlName) =>  messageFormValidation(this.form.get(controlName));

  private createForm() {
    this.form = new FormGroup({
      confirmCode: new FormControl('', [Validators.required]),
    });
  }

}
