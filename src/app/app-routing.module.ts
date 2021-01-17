import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent,
  }, {
    path: 'planets/:id',
    component: PlanetInfoComponent,
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
