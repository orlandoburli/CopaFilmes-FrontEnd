import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.scss'],
})
export class MovieSelectionComponent implements OnInit, OnDestroy {
  @Input() movies = [];
  selectedMovies = [];
  maxMovies = 8;
  errorMessage = '';

  subscriptions: Subscription[] = [];

  @Output() championsSelected: EventEmitter<Movie[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  onSelectionChange($event) {
    const {selected, movie } = $event;

    if (selected) {
      this.selectedMovies.push(movie);
    } else {
      const index = this.selectedMovies.findIndex(m => m.id === movie.id);
      this.selectedMovies.splice(index, 1);
    }
  }

  doGenerateChampionship() {
    this.errorMessage = '';

    if (this.selectedMovies.length != 8) {
      this.errorMessage = 'Selecione 8 filmes para gerar o campeonato!';
      return;
    }

    this.championsSelected.emit(this.selectedMovies);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
