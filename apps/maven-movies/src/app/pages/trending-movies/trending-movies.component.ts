import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/models/interfaces';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
})
export class TrendingMoviesComponent implements OnInit {
  movies: Movie[] = [];
  fallback = 'assets/cinema.jpg';

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getTrendingMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  openDetail(event: any) {
    this.router.navigate([event.id, event.title]);
  }
}
