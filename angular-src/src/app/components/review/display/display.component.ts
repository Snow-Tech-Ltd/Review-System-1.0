import { Component, OnInit } from '@angular/core';
import { GetReviewsService } from '../../../services/get-reviews.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-review/app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  reviews;
  review: string;
  rating: number;

  page = 0;
  limit = 4;
  constructor(private reviewService: GetReviewsService, private snackBar: MatSnackBar) { }

  isEmpty(reviewObject){
    for(var key in reviewObject) {
      if(key)
          return false;
    }
    return true;
  }

  loadMore() {
    this.page++;
    this.reviewService.setPage(this.page, this.limit);
    this.reviewService.getReviews()
      .subscribe( reviews => {
        let localReviews = JSON.parse(JSON.stringify(reviews));  
        if(!this.isEmpty(reviews)){
            this.reviews.push(...localReviews);
          }
          else{
            this.page--;
            this.snackBar.open('Reached to End!!!', 'Close', {
              duration: 2000,
              horizontalPosition: 'center'
            });
          }
        }
      );
  }

  loadLess() {
    this.page--;
    if(this.page < 0){
      this.page++;
            this.snackBar.open('Reached to Start!!!', 'Close', {
              duration: 2000,
              horizontalPosition: 'center'
            });
    }

    this.reviewService.setPage(this.page, this.limit);
    this.reviewService.getReviews()
      .subscribe( reviews => {
          if(!this.isEmpty(reviews)){
            this.reviews = reviews;
          }
        }
      );
  }

  ngOnInit(): void {
    this.page = 0;
    this.reviewService.setPage(this.page, this.limit);
    
    this.reviewService.getReviews()
      .subscribe( reviews =>
        this.reviews = reviews );
  }
}
