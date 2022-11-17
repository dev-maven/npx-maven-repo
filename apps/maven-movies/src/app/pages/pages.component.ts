import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Movie } from '../core/models/movies';
import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  moviesLoading = false;
  movies: Movie[] = [];
  showSearch = false;
  searchCtrl = new FormControl();

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.searchCtrl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => this.search(res.toLowerCase().trim()));
  }

  search(input: string) {
    this.moviesService.searchMovies(input).subscribe((res) => {
      this.movies = res.results;
    });
  }

  setSearchDisplay(event: boolean) {
    this.showSearch = event;
  }

  onOptionSelected(event: any) {
    const value = event.option.value;
    const result = this.movies.find((x) => x.title === value);
    if (result) this.router.navigate([result.id, result.title]);
    this.showSearch = false;
  }
}
