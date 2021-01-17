import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet } from '../interfaces/planet.interface';

export const BASE_URL = 'https://swapi.dev/api';

export interface IPlanetResponse {
  count: number;
  next: string;
  previous: string;
  results: IPlanet[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanetsList(page: string): Observable<IPlanetResponse> {
    const params = { page };

    return this.http.get(`${BASE_URL}/planets/`, { params }) as Observable<IPlanetResponse>;
  }

  getPlanetInfo(id: number): Observable<IPlanet> {
    return this.http.get(`${BASE_URL}/planets/${id}`) as Observable<IPlanet>;
  }
}
