import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/models/movie.model';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  @Input() position: number;
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }
}
