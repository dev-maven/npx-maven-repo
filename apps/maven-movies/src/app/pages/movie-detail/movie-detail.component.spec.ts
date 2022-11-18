import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesService } from '../../core/services/movies.service';
import { NOWPLAYINGMOVIES } from '../../core/test-data/movies';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let mockMoviesService: any;
  let activatedRouteSpy;
  let el: DebugElement;

  beforeEach(async () => {
    mockMoviesService = {
      getMovieDetail: jest.fn(),
    };
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: 436270,
          name: 'Black Adam',
        }),
      },
    };
    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MoviesService, useValue: mockMoviesService },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    jest
      .spyOn(mockMoviesService, 'getMovieDetail')
      .mockReturnValue(of(NOWPLAYINGMOVIES.results[0]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get movie', () => {
    expect(component.selectedMovie).toBe(NOWPLAYINGMOVIES.results[0]);
  });
  it('should return correct background url if url is passed', () => {
    component.baseUrl = 'https://www.testurl.com/';
    const background = component.getBgImage('dummyUrl');
    fixture.detectChanges();
    expect(background.background).toBe(`url(${component.baseUrl}dummyUrl)`);
  });
  it('should return default background if url is not passed', () => {
    component.baseUrl = 'https://www.testurl.com/';
    const background = component.getBgImage('');
    fixture.detectChanges();
    expect(background.background).toBe('url(assets/cinema.jpg)');
  });

  it('should return current stars for rating', () => {
    component.stars = component.calculateAvgValue(4);
    fixture.detectChanges();
    const result = [
      'star',
      'star',
      'star_border',
      'star_border',
      'star_border',
    ];
    expect(component.stars).toMatchObject(result);
  });

  it('should return display movie properties', () => {
    const fixture = TestBed.createComponent(MovieDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Black Adam (2022)'
    );
    expect(compiled.querySelector('.runtime')?.textContent).toContain(
      '162 minutes'
    );
    expect(compiled.querySelector('.overview')?.textContent).toContain(
      NOWPLAYINGMOVIES.results[0].overview
    );
    const stars = el.queryAll(By.css('.mat-icon-xs'));
    expect(stars.length).toBe(5);
    const genres = el.queryAll(By.css('.genre-chip'));
    expect(genres.length).toBe(3);

    const languages = el.queryAll(By.css('.language-chip'));
    expect(languages.length).toBe(3);
  });
});
