import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating = 0;
  @Input()
  private readonly = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push( i > this.rating);
    }
  }
  ngOnInit() {
  }
  changeStars(i: number) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
      this.ngOnInit();
    }
  }
}
