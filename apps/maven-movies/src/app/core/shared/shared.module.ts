import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@nx-maven-repo/third-party';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { PageHeaderComponent } from '@nx-maven-repo/page-header';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  declarations: [HeaderComponent, SidenavListComponent, PageHeaderComponent],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    HeaderComponent,
    SidenavListComponent,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
