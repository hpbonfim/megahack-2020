import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserConfirmationComponent } from './user-confirmation.component';

const routes: Routes = [{ path: '', component: UserConfirmationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConfirmationRoutingModule { }
