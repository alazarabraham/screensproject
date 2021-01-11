import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CardComponent } from './components/cards/card/card.component';
import { TabsAndCardsComponent } from './components/databasetabs/tabs-and-cards/tabs-and-cards.component';
import { RdbmsComponent } from './components/databaseIngestions/rdbms/rdbms.component';
import { StreamingdataComponent } from './components/databaseIngestions/streamingdata/streamingdata.component';
import { SidenavComponent } from './components/reusablecomponents/navbar/sidenav/sidenav.component';
import { FlatfileComponent } from './components/databaseIngestions/flatfile/flatfile.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { HomeComponent } from './components/home/home/home.component';
import { StreamdataComponent } from './components/ingestions/streamdata/streamdata.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomepageComponent,
    CardComponent,
    TabsAndCardsComponent,
    RdbmsComponent,
    StreamingdataComponent,
    SidenavComponent,
    FlatfileComponent,
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
