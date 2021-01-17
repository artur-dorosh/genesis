import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { IResident } from '../../interfaces/resident.interface';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-resident-info',
  templateUrl: './resident-info.component.html',
  styleUrls: ['./resident-info.component.scss']
})
export class ResidentInfoComponent implements OnInit {
  resident: IResident;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.peopleService.getResident(this.route.snapshot.params.id)
      .subscribe((resident: IResident) => this.resident = resident);
  }

  getResidentId(resident: string): string {
    const result = resident.match(/\d+/);
    const id = result && result[0];

    return id || '';
  }
}
