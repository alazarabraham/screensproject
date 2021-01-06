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
import { ViewdetailsComponent } from './components/details/viewdetails/viewdetails.component';
import { EditdetailsComponent } from './components/details/editdetails/editdetails.component';
import { ExecutiondetailsComponent } from './components/details/executiondetails/executiondetails.component';
import { DetailscardsComponent } from './components/details/detailscards/detailscards.component';

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
    ViewdetailsComponent,
    EditdetailsComponent,
    ExecutiondetailsComponent,
    DetailscardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
