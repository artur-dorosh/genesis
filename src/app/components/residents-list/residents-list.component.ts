import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { IResident } from '../../interfaces/resident.interface';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { IPlanet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss']
})
export class ResidentsListComponent implements OnInit {
  @Input() residentsUrls: string[];

  residents: IResident[];
  requests: Observable<any>[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getResidentsIds(this.residentsUrls).forEach(id => {
      this.requests.push(this.peopleService.getResident(+id));
    });

    forkJoin(this.requests).subscribe((residents: IResident[]) => this.residents = residents);
  }

  getResidentsIds(residents: string[]): string[] {
    const ids: string[] = [];
    residents.forEach((man: string) => {
      const result = man.match(/\d+/);
      if (result) {
        ids.push(result[0]);
      }
    });

    return ids;
  }

  getResidentId(resident: IResident): string {
    const result = resident.url.match(/\d+/);
    const id = result && result[0];

    return id || '';
  }
}
