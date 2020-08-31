import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetReviewsService {

  constructor(private http: HttpClient) { }

  getReviews(){
    return this.http.get('http://localhost:3000/review/display')
    .pipe(map(res => res));
  }
}
