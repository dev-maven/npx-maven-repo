import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../core/models/interfaces';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'nx-maven-repo-app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  selectedMovie!: MovieDetail;
  stars: string[] = [];
  id: any;
  baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.moviesService.getMovieDetail(this.id).subscribe((res) => {
        this.selectedMovie = res;
        this.stars = this.calculateAvgValue(this.selectedMovie.vote_average);
      });
  }

  getBgImage(url: string) {
    let bgImage = null;
    if (url) {
      bgImage = {
        background: `url(${this.baseUrl}${url})`,
      };
    } else {
      bgImage = {
        background: 'url(assets/cinema.jpg)',
      };
    }
    return bgImage;
  }

  calculateAvgValue(rating: number) {
    let stars = [];

    switch (true) {
      case rating > 0 && rating < 2: {
        stars = [
          'star_half',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        return stars;
      }
      case rating == 2: {
        stars = [
          'star',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        return stars;
      }
      case rating > 2 && rating < 4: {
        stars = [
          'star',
          'star_half',
          'star_border',
          'star_border',
          'star_border',
        ];
        return stars;
      }
      case rating == 4: {
        stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
        return stars;
      }
      case rating > 4 && rating < 6: {
        stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
        return stars;
      }
      case rating == 6: {
        stars = ['star', 'star', 'star', 'star_border', 'star_border'];
        return stars;
      }
      case rating > 6 && rating < 8: {
        stars = ['star', 'star', 'star', 'star_half', 'star_border'];
        return stars;
      }
      case rating == 8: {
        stars = ['star', 'star', 'star', 'star', 'star_border'];
        return stars;
      }
      case rating > 8 && rating < 10: {
        stars = ['star', 'star', 'star', 'star', 'star_half'];
        return stars;
      }
      case rating >= 10: {
        stars = ['star', 'star', 'star', 'star', 'star'];
        return stars;
      }
      default: {
        stars = [
          'star_border',
          'star_border',
          'star_border',
          'star_border',
          'star_border',
        ];
        return stars;
      }
    }
  }
}
