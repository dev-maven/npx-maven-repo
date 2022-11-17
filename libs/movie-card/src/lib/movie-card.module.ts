import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nx-maven-repo/third-party';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent],
})
export class MovieCardModule {}
