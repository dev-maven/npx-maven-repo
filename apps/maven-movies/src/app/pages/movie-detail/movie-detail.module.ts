import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';
export const routes = [
  {
    path: '',
    component: MovieDetailComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [MovieDetailComponent],
})
export class MovieDetailModule {}
