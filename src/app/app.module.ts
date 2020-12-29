import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { StreamdataComponent } from './components/ingestions/streamdata/streamdata/streamdata.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    StreamdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
