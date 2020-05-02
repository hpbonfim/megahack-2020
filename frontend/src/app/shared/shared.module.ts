import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
