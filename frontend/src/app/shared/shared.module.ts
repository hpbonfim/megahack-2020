import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContractCardComponent } from './component/contract-card/contract-card.component';
import { ContractGeneratorComponent } from './component/contract-generator/contract-generator.component';
import { ContractInfosComponent } from './component/contract-infos/contract-infos.component';
import { ContractService } from './services/contract.service';

@NgModule({
  declarations: [
    ContractCardComponent,
    ContractGeneratorComponent,
    ContractInfosComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ContractCardComponent,
    ContractGeneratorComponent,
    ContractInfosComponent,
  ],
  providers: [ContractService],
})
export class SharedModule {}
