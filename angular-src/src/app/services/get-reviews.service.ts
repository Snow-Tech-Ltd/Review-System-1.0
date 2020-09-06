import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetReviewsService {

  constructor(private http: HttpClient) { }

  page
  limit
  public setPage(page: number, limit: number) {
    this.page = page;
    this.limit = limit;
  }

  getReviews(){
    let url = `http://localhost:3000/review/display?page=${this.page}&limit=${this.limit}`;
    return this.http.get(url)
    .pipe(map(res => 
      // res = JSON.parse(res)
      res
    ));
  }
}
