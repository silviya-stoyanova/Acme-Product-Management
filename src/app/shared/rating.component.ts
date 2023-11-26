import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'ng-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class Rating implements OnChanges {
  constructor() {
    this.ratingArray = Array(this.rating);
  }

  @Input() rating: number = 0;
  ratingArray: number[] = [];
  ngOnChanges(): void {
    this.ratingArray = Array(Math.round(this.rating));
    console.log('Rating changed.');
  }
}
