import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { UserSettingFormComponent } from './user-setting-form/user-setting-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
