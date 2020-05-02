import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { NgxMaskModule } from 'ngx-mask';
import { UserDataService } from '../user-confirmation/user-data.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [LoginService, UserDataService],
})
export class LoginModule {}
