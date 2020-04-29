import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
