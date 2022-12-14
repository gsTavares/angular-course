import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/Comment';
import { Response } from '../models/util/Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseApiUrl = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  createComment(comment: Comment) : Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(`${this.baseApiUrl}/comment`, comment);
  }
}
