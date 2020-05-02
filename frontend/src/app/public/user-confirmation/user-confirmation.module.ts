import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgxMaskModule } from 'ngx-mask';

import { UserConfirmationRoutingModule } from './user-confirmation-routing.module';
import { UserConfirmationComponent } from './user-confirmation.component';
import { UserConfirmationSmsService } from './user-confirmation-sms.service';
import { UserConfirmationCodeService } from './user-confirmation-code.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@NgModule({
  declarations: [UserConfirmationComponent],
  imports: [
    UserConfirmationRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    UserDataService,
    UserConfirmationSmsService,
    UserConfirmationCodeService,
  ],
})
export class UserConfirmationModule {}
