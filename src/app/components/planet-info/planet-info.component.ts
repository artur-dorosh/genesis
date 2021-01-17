import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { ActivatedRoute } from '@angular/router';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  planet: IPlanet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planetsService.getPlanetInfo(this.route.snapshot.params.id)
      .subscribe((planet: IPlanet) => this.planet = planet);
  }

}
