import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingMoviesComponent } from './now-playing-movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';

export const routes = [
  {
    path: '',
    component: NowPlayingMoviesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [NowPlayingMoviesComponent],
})
export class NowPlayingMoviesModule {}
