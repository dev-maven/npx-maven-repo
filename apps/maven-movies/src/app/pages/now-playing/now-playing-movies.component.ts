import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/models/interfaces';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss'],
})
export class NowPlayingMoviesComponent implements OnInit {
  movies: Movie[] = [];
  fallback = 'assets/cinema.jpg';
  constructor(private moviesService: MoviesService, public router: Router) {}

  ngOnInit() {
    this.moviesService.getNowPlayingMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  openDetail(event: any) {
    this.router.navigate([event.id, event.title]);
  }
}
