import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './planets.service';
import { IResident } from '../interfaces/resident.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getResident(id: number): Observable<IResident> {
    return this.http.get(`${BASE_URL}/people/${id}`) as Observable<IResident>;
  }
}
