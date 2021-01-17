import { Component, Input, OnInit } from '@angular/core';
import { IResident } from '../../interfaces/resident.interface';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {
  @Input() resident: string;

  constructor() { }

  ngOnInit(): void {
  }

}
