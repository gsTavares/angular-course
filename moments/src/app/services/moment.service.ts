import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../models/Moment';
import { Response } from '../models/util/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getMoments() : Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.baseApiUrl+"/moments");
  }

  createMoment(moment: Moment): Observable<Response<Moment>> {
    return this.http.post<Response<Moment>>(this.baseApiUrl+"/moment", moment);
  }

  getMomentById(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.baseApiUrl}/moments/${id}`);
  }

  deleteMomentByid(id: number) : Observable<Response<Moment>> {
    return this.http.delete<Response<Moment>>(`${this.baseApiUrl}/moments/${id}`);
  }

  updateMoment(moment: Moment): Observable<Response<Moment>> {
    return this.http.put<Response<Moment>>(`${this.baseApiUrl}/moment`, moment);
  }
}
