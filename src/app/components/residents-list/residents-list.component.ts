import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { IResident } from '../../interfaces/resident.interface';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss']
})
export class ResidentsListComponent implements OnInit {
  @Input() residentsUrls: string[];

  residents: IResident[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  //   this.peopleService.getResidentsList(this.residentsUrls)
  //     .subscribe(response => {
  //       console.log(response);
  //       this.residents = response.results;
  //     });
  }

  // getResidentsIds(people: string[]): string[] {
  //   const ids: string[] = [];
  //   people.forEach((man: string) => {
  //     const result = man.match(/\d+/);
  //     if (result) {
  //       ids.push(result[0]);
  //     }
  //   });
  //
  //   return ids;
  // }
}
