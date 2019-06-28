import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EAMListComponent } from './home/eamlist/eamlist.component';
import { CommonUpsHeaderComponent } from './home/common-ups-header/common-ups-header.component';
import { PkgSumComponent } from './home/pkg-sum/pkg-sum.component';
import { WingButtonComponent } from './home/wing-button/wing-button.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EAMListComponent,
    CommonUpsHeaderComponent,
    PkgSumComponent,
    WingButtonComponent,
    HomeComponent
  ],
  imports: [
  HttpClientModule,

  BrowserModule,
  
  AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
