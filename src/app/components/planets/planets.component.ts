import { Component, OnInit } from '@angular/core';
import { IPlanetResponse, PlanetsService } from '../../services/planets.service';
import { map } from 'rxjs/operators';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  currentPage = 1;

  pagesCount: number;
  planets: IPlanet[];

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planetsService.getPlanetsList(this.currentPage.toString()).pipe(
      map((response: IPlanetResponse) => {
        this.pagesCount = Math.ceil(response.count / 10);
        return response.results;
      })
    ).subscribe((planets: IPlanet[]) => this.planets = planets);
  }

  loadMore(): void {
    if (this.currentPage >= this.pagesCount) {
      return;
    }

    this.planetsService.getPlanetsList((this.currentPage + 1).toString()).pipe(
     map((response: IPlanetResponse) => response.results)
    ).subscribe((planets: IPlanet[]) => {
      this.planets = this.planets.concat(planets);
      this.currentPage++;
    });
  }
}
