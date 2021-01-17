import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { RouterModule } from '@angular/router';
import { PlanetsService } from './services/planets.service';
import { ResidentsListComponent } from './components/residents-list/residents-list.component';
import { ResidentComponent } from './components/resident/resident.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetComponent,
    PlanetsComponent,
    HeaderComponent,
    PlanetInfoComponent,
    ResidentsListComponent,
    ResidentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
