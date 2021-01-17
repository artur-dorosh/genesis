import { Component, Input, OnInit } from '@angular/core';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() planet: IPlanet;

  constructor() { }

  ngOnInit(): void {
  }

}
