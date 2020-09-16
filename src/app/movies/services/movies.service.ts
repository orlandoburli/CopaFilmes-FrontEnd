import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Champion } from '../models/champion.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${environment.baseUrl}/api/movies`);
  }

  public generateChampions(movies: Movie[]): Observable<Champion> {
    const ids = movies.map((m) => m.id);
    return this.httpClient.post<Champion>(
      `${environment.baseUrl}/api/movies`,
      ids
    );
  }
}
