/* eslint-disable @typescript-eslint/no-empty-function */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesService } from '../../core/services/movies.service';

import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { TOPRATEDMOVIES } from '../../core/test-data/movies';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let fixture: ComponentFixture<TopRatedMoviesComponent>;
  let mockMoviesService: any;
  let router: Router;

  class MockRouter {
    navigate(url: string[]) {
      return url;
    }
  }
  beforeEach(async () => {
    mockMoviesService = {
      getTopRatedMovies: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [TopRatedMoviesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MoviesService, useValue: mockMoviesService },
        { provide: Router, useClass: MockRouter },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TopRatedMoviesComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);

    jest
      .spyOn(mockMoviesService, 'getTopRatedMovies')
      .mockReturnValue(of(TOPRATEDMOVIES));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', () => {
    expect(component.movies).toBe(TOPRATEDMOVIES.results);
  });

  it('should get navigate on openDetail call', fakeAsync(() => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.openDetail({ id: 1, title: 'Test' });
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith([1, 'Test']);
  }));
});
