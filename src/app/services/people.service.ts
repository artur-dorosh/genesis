import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './planets.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getResident(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/people/${id}`);
  }
}
