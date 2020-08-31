import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  review: any;

  constructor(private http:HttpClient) { }

  addReview(review: { review: String; rating: Number; }){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/review', review, {headers: header})
      .pipe(map((res: any) => res));
  }
}
