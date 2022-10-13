import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../models/Moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl: string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}/moment`;

  constructor(private http: HttpClient) { }

  createMoment(moment: Moment): Observable<Moment> {

    return this.http.post<Moment>(this.apiUrl, moment);
  }
}
