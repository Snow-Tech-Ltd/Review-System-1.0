import { Component, OnInit } from '@angular/core';
import { GetReviewsService } from '../../../services/get-reviews.service';

@Component({
  selector: 'app-review/app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  reviews
  review: string;
  rating: number;

  constructor(private reviewService: GetReviewsService) { }

  ngOnInit(): void {
    this.reviewService.getReviews()
      .subscribe( reviews =>
        this.reviews = reviews );
  }





}
