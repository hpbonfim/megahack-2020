import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

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
    if (this.form.invalid) { return; }

    const response = await this.loginService.create(this.form.value).toPromise();

    console.log(response);

  }

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
