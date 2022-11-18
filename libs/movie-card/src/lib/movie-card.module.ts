import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent],
})
export class MovieCardModule {}
