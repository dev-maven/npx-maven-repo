/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { MovieCardComponent } from './movie-card.component';
export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 },
};

export function click(
  el: DebugElement | HTMLElement,
  eventObj: any = ButtonClickEvents.left
): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let el: DebugElement;
  const presetMovie = {
    adult: false,
    backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    genre_ids: [18, 80],
    id: 278,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    popularity: 68.371,
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    release_date: '1994-09-23',
    title: 'The Shawshank Redemption',
    video: false,
    vote_average: 8.7,
    vote_count: 22656,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MovieCardComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie details', () => {
    const fixture = TestBed.createComponent(MovieCardComponent);
    component.movie = presetMovie;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.movie.title).toBe('The Shawshank Redemption');
      expect(component.movie.id).toBe(278);
      expect(component.movie.release_date).toBe('1994-09-23');
    });
  });

  it('should return correct background url if url is passed', () => {
    component.baseUrl = 'https://www.testurl.com/';
    const background = component.getBgImage('dummyUrl');
    fixture.detectChanges();
    expect(background.background).toBe(
      `url(${component.baseUrl}dummyUrl) top center no-repeat`
    );
  });
  it('should return default background if url is not passed', () => {
    component.baseUrl = 'https://www.testurl.com/';
    component.imageFallback = 'assets/cinema.jpg';
    const background = component.getBgImage('');
    fixture.detectChanges();
    expect(background.background).toBe(
      'url(assets/cinema.jpg) top center no-repeat'
    );
  });
});
