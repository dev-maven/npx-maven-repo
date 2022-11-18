import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'nx-maven-repo-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() searchOpen = false;
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() searchToggle = new EventEmitter<boolean>();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  onToggleSearch() {
    this.searchOpen = !this.searchOpen;
    this.searchToggle.emit(this.searchOpen);
  }
}
