import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Champion } from '../../models/champion.model';
import { Movie } from '../../models/movie.model';
import { State } from '../../models/state.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {

  state = State.selectMovies;

  movies: Movie[] = [];
  selectedMovies: Movie[] = [];

  champions: Champion;

  subscriptions: Subscription[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    let s1 = this.moviesService
      .getMovies()
      .subscribe((result) => (this.movies = result));
    this.subscriptions.push(s1);
  }

  onChampionsSelected(selectedMovies: Movie[]) {
    this.selectedMovies = selectedMovies;

    this.state = State.loading;

    let s1 = this.moviesService
      .generateChampions(this.selectedMovies)
      .subscribe((result) => {
        this.champions = result;
        this.state = State.presentChampions;
      });

    this.subscriptions.push(s1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
