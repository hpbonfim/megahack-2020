import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageMenuComponent } from '../page-menu/page-menu.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [UserShellComponent, PageMenuComponent, BottomMenuComponent],
  imports: [
    UserShellRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class UserShellModule {}
