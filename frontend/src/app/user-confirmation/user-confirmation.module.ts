import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';

import { UserConfirmationRoutingModule } from './user-confirmation-routing.module';
import { UserConfirmationComponent } from './user-confirmation.component';
import { UserConfirmationService } from './user-confirmation.service';


@NgModule({
  declarations: [UserConfirmationComponent],
  imports: [
    UserConfirmationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    UserConfirmationService
  ]
})
export class UserConfirmationModule { }
