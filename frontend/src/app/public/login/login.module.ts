import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDataService } from 'src/app/shared/services/user-data.service';

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
