import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';

export const routes = [
  {
    path: '',
    component: TopRatedMoviesComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [TopRatedMoviesComponent],
})
export class TopRatedMoviesModule {}
