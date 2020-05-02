import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContractRoutingModule } from './user-contract-routing.module';
import { UserContractComponent } from './user-contract.component';


@NgModule({
  declarations: [UserContractComponent],
  imports: [
    CommonModule,
    UserContractRoutingModule
  ]
})
export class UserContractModule { }
