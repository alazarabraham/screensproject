import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './components/dashboard/pending/pending.component';
import { HomeComponent } from './components/home/home.component';
import { FlatfileComponent } from './components/ingestions/flatfile/flatfile.component';
import { RdbmsComponent } from './components/ingestions/rdbms/rdbms.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'ingestflatfile', component: FlatfileComponent },
  { path: 'ingestrdbms', component: RdbmsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PendingComponent, FlatfileComponent, RdbmsComponent]