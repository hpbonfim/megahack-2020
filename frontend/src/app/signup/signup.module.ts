import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule } from 'ngx-mask';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { UserRegistersService } from './user-registers.service';
import { UserDataService } from '../user-confirmation/user-data.service';
import { UserConfirmationSmsService } from '../user-confirmation/user-confirmation-sms.service';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    UserRegistersService,
    UserDataService,
    UserConfirmationSmsService,
  ],
})
export class SignupModule {}
