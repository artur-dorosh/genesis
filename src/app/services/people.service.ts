import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './planets.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getResidentsList(residents: string[]): Observable<any> {
    const params = {search: `5`};

    return this.http.get(`${BASE_URL}/people/`, { params });
  }
}
