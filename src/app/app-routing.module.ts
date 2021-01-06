import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RdbmsComponent } from './components/databaseIngestions/rdbms/rdbms.component';
import { StreamingdataComponent } from './components/databaseIngestions/streamingdata/streamingdata.component'
import { FlatfileComponent } from './components/databaseIngestions/flatfile/flatfile.component'
import { ViewdetailsComponent } from './components/details/viewdetails/viewdetails.component';
import { EditdetailsComponent } from './components/details/editdetails/editdetails.component';
import { ExecutiondetailsComponent } from './components/details/executiondetails/executiondetails.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ingestflatfile', component: FlatfileComponent },
  { path: 'ingestrdbms', component: RdbmsComponent },
  { path: 'ingeststreamdata', component: StreamingdataComponent },
  { path: 'viewdetails', component: ViewdetailsComponent},
  { path: 'editdetails', component: EditdetailsComponent},
  { path: 'executiondetails', component: ExecutiondetailsComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, RdbmsComponent, StreamingdataComponent, HomepageComponent]