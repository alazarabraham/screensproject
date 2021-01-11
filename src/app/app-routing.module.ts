import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdbmsComponent } from "./components/ingestions/rdbms/rdbms.component";

import { FlatfileComponent } from './components/ingestions/flatfile/flatfile.component'
import { HomeComponent } from './components/home/home/home.component';
import { StreamdataComponent } from './components/ingestions/streamdata/streamdata.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingestions/rdbms', component: RdbmsComponent },
  { path: 'ingestions/flatfile', component: FlatfileComponent },
  { path: 'ingestions/streamdata', component: StreamdataComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RdbmsComponent, StreamdataComponent, FlatfileComponent]