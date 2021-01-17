import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanetsList(page: string): Observable<any> {
    const params = { page };

    return this.http.get(`${BASE_URL}/planets/`, { params });
  }

  getPlanetInfo(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/planets/${id}`);
  }
}
