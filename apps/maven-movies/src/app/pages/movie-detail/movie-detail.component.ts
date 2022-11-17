import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../core/models/movies';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  selectedMovie!: MovieDetail;
  stars: string[] = [];
  baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.moviesService.getMovieDetail(id).subscribe((res) => {
        this.selectedMovie = res;
        this.calculateAvgValue(this.selectedMovie.vote_average);
        console.log(this.selectedMovie);
      });
  }

  getBgImage(url: string) {
    const bgImage = {
      background: `url(${this.baseUrl}${url})`,
    };
    return bgImage;
  }

  calculateAvgValue(rating: number) {
    switch (true) {
      case rating > 0 && rating < 2: {
        this.stars = [
          'star_half',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        break;
      }
      case rating == 2: {
        this.stars = [
          'star',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        break;
      }
      case rating > 2 && rating < 4: {
        this.stars = [
          'star',
          'star_half',
          'star_border',
          'star_border',
          'star_border',
        ];
        break;
      }
      case rating == 4: {
        this.stars = [
          'star',
          'star',
          'star_border',
          'star_border',
          'star_border',
        ];
        break;
      }
      case rating > 4 && rating < 6: {
        this.stars = [
          'star',
          'star',
          'star_half',
          'star_border',
          'star_border',
        ];
        break;
      }
      case rating == 6: {
        this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
        break;
      }
      case rating > 6 && rating < 8: {
        this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
        break;
      }
      case rating == 8: {
        this.stars = ['star', 'star', 'star', 'star', 'star_border'];
        break;
      }
      case rating > 8 && rating < 10: {
        this.stars = ['star', 'star', 'star', 'star', 'star_half'];
        break;
      }
      case rating >= 10: {
        this.stars = ['star', 'star', 'star', 'star', 'star'];
        break;
      }
      default: {
        this.stars = [
          'star_border',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        break;
      }
    }
  }
}
