import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@nx-maven-repo/third-party';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { PageHeaderModule } from '@nx-maven-repo/page-header';
import { MoviesService } from '../services/movies.service';
import { RouterModule } from '@angular/router';
import { MovieCardModule } from '@nx-maven-repo/movie-card';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PageHeaderModule,
    RouterModule,
    MovieCardModule,
  ],
  declarations: [HeaderComponent, SidenavListComponent],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    HeaderComponent,
    SidenavListComponent,
    PageHeaderModule,
    MovieCardModule,
  ],
  providers: [MoviesService],
})
export class SharedModule {}
