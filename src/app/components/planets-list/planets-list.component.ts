import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { map } from 'rxjs/operators';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planets: IPlanet[];

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planetsService.getPlanetsList().pipe(
      map(response => response.results)
    ).subscribe((planets: IPlanet[]) => this.planets = planets);
  }

  getPlanetId(planet: IPlanet): string {
    const result = planet.url.match(/\d+/);
    const id = result && result[0];

    return id || '';
  }
}
