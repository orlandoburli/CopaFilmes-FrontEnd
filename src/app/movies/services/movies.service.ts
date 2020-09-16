import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Champion } from '../models/champion.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.baseUrl}/api/movies`);
  }

  public generateChampions(movies: Movie[]): Observable<Champion> {
    const ids = movies.map(m => m.id);
    return this.httpClient.post<Champion>(`${this.baseUrl}/api/movies`, ids);
  }
}
