import { Component, Input } from '@angular/core';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent {
  @Input() planets: IPlanet[];

  constructor() { }

  getPlanetId(planet: IPlanet): string {
    const result = planet.url.match(/\d+/);
    const id = result && result[0];

    return id || '';
  }
}
