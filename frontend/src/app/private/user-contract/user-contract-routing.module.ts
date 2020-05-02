import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserContractComponent } from './user-contract.component';

const routes: Routes = [{ path: '', component: UserContractComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContractRoutingModule { }
