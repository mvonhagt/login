import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JdeloginComponent } from './jdelogin/jdelogin.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/Forms';


@NgModule({
  declarations: [
    AppComponent,
    JdeloginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
