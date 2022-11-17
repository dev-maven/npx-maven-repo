import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/models/movies';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css'],
})
export class TopRatedMoviesComponent implements OnInit {
  movies: Movie[] = [];
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
