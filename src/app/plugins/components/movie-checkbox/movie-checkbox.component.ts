import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/movies/models/movie.model';

@Component({
  selector: 'app-movie-checkbox',
  templateUrl: './movie-checkbox.component.html',
  styleUrls: ['./movie-checkbox.component.scss'],
})
export class MovieCheckboxComponent implements OnInit {
  @Input() movie: Movie;
  @Input() selected = false;

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onModelChange($event) {
    this.change.emit({ selected: $event, movie: this.movie });
  }

  toogleSelecion() {
    this.selected = !this.selected;
    this.onModelChange(this.selected);
  }

  ngOnInit(): void {}
}
