import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx-maven-repo-app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent {
  @Output() closeSidenav = new EventEmitter<void>();
  onClose() {
    this.closeSidenav.emit();
  }
}
