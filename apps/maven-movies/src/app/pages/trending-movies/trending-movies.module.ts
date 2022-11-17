import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingMoviesComponent } from './trending-movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';

export const routes = [
  {
    path: '',
    component: TrendingMoviesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [TrendingMoviesComponent],
})
export class TrendingMoviesModule {}
