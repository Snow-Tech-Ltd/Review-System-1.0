import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './components/review/review.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AddReviewService } from './services/add-review.service';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './components/star/star.component';
import { DisplayComponent } from './components/review/display/display.component';
import { GetReviewsService } from './services/get-reviews.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'review/display', component: DisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    HomeComponent,
    NavbarComponent,
    StarComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [ AddReviewService, HttpClientModule, GetReviewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
