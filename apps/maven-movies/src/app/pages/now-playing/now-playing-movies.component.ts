import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/models/movies';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css'],
})
export class NowPlayingMoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getNowPlayingMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  openDetail(event: any) {
    this.router.navigate([event.id, event.title]);
  }
}
