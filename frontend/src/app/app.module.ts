import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Adicionei aqui
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './shared/http-handlers/http-error-handler.service';
import { HttpSpinnerRequestInterceptor } from './shared/http-handlers/http-spinner-interceptor.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpSpinnerRequestInterceptor, multi: true },
    {provide: ErrorHandler, useClass: HttpErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
