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

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl + "/animals");
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/animals/${id}`); 
  }
}
