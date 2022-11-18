import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/now-playing/now-playing-movies.module').then(
            (m) => m.NowPlayingMoviesModule
          ),
      },
      {
        path: 'top-rated',
        loadChildren: () =>
          import('./pages/top-rated-movies/top-rated-movies.module').then(
            (m) => m.TopRatedMoviesModule
          ),
      },
      {
        path: 'trending',
        loadChildren: () =>
          import('./pages/trending-movies/trending-movies.module').then(
            (m) => m.TrendingMoviesModule
          ),
      },
      {
        path: ':id/:name',
        loadChildren: () =>
          import('./pages/movie-detail/movie-detail.module').then(
            (m) => m.MovieDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
