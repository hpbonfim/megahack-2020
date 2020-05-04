import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { UserContractRoutingModule } from './user-contract-routing.module';
import { UserContractComponent } from './user-contract.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserContractComponent],
  imports: [
    CommonModule,
    UserContractRoutingModule,
    SharedModule,
    MatCardModule,
  ],
})
export class UserContractModule {}
