import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx-maven-repo-app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() imageFallback = '';
  @Output() cardClicked = new EventEmitter<any>();
  baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  getBgImage(url: string) {
    let bgImage = null;
    if (url) {
      bgImage = {
        background: `url(${this.baseUrl}${url}) top center no-repeat`,
      };
    } else {
      bgImage = {
        background: `url(${this.imageFallback}) top center no-repeat`,
      };
    }
    return bgImage;
  }

  openDetail(id: number, title: string) {
    this.cardClicked.emit({ id, title });
  }
}
