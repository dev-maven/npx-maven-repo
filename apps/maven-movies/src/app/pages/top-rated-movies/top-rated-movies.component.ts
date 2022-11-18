import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/models/interfaces';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  movies: Movie[] = [];
  fallback = 'assets/cinema.jpg';
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getTopRatedMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  openDetail(event: any) {
    this.router.navigate([event.id, event.title]);
  }
}
