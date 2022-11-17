import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail, MovieResult } from '../models/movies';

@Injectable()
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getNowPlayingMovies(): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.baseUrl}/movie/now_playing`);
  }

  getTrendingMovies(): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.baseUrl}/movie/popular`);
  }

  getTopRatedMovies(): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.baseUrl}/movie/top_rated`);
  }

  getMovieDetail(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${id}`);
  }

  searchMovies(queryString: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.baseUrl}/search/movie`, {
      params: { query: queryString },
    });
  }
}
