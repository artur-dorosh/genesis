import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent,
  }, {
    path: '**',
    redirectTo: 'planets',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
