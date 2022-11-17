import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';

export const routes = [
  {
    path: '',
    component: AllMoviesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [AllMoviesComponent],
})
export class AllMoviesModule {}
