import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-maven-repo-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() category = '';
}
