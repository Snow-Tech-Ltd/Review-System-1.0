import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { AddReviewService } from '../../services/add-review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
    review: String;

    constructor(private addReviewService: AddReviewService, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
    }

    stars=[1,2,3,4,5];
    rating = 1;
    hoverState=0;

    onStarEnter(starId : number) {
      this.hoverState=starId;
    }

    onStarLeave() {
      this.hoverState=0;
    }

    onStarClicked(starId : number) {
      this.rating=starId;
    }

    onReviewSubmit(form: NgForm){

      if(form.invalid){
        return;
    } 

    const newReview = {
      review: form.value.review,
      rating: this.rating
    }

    // Add review
    this.addReviewService.addReview(newReview).subscribe(data => {
      
      if(data.sucess){
        this.snackBar.open('Review has been saved successfully!!!', 'Close');
      }
      else{
        this.snackBar.open('Oops!! Some error occured', 'Close');
      }
    });
  }
}
