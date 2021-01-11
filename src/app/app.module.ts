import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { HomeComponent } from './components/home/home/home.component';
import { StreamdataComponent } from './components/ingestions/streamdata/streamdata.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    StreamdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
