import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListRenderService {

  private apiUrl = 'http://localhost:3000';  
  
  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal:Animal): Animal[] {
    return animals.filter(a => a.name != animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl + "/animals");
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/animals/${id}`); 
  }
}
