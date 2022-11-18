import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MoviesService } from '../core/services/movies.service';

import { PagesComponent } from './pages.component';
import { SEARCHEDMOVIES } from '../core/test-data/movies';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let mockMoviesService: any;
  let router: Router;
  let el: DebugElement;
  let navigateSpy: any;

  class MockRouter {
    navigate(url: string[]) {
      return url;
    }
  }

  beforeEach(async () => {
    mockMoviesService = {
      searchMovies: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      declarations: [PagesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MoviesService, useValue: mockMoviesService },
        { provide: Router, useClass: MockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    el = fixture.debugElement;
    navigateSpy = jest.spyOn(router, 'navigate');

    jest
      .spyOn(mockMoviesService, 'searchMovies')
      .mockReturnValue(of(SEARCHEDMOVIES));
    component.search('black');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies that matches query', () => {
    expect(component.movies).toBe(SEARCHEDMOVIES.results);
  });

  it('should set showSearch property', () => {
    component.setSearchDisplay(false);
    fixture.detectChanges();
    expect(component.showSearch).toBe(false);
  });
  it('should get correct movie object from title and navigate', () => {
    const obj = {
      option: {
        value: 'Black Adam',
      },
    };
    component.onOptionSelected(obj);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith([436270, 'Black Adam']);
  });

  it('should display input text', async () => {
    component.searchCtrl.setValue('black');
    component.searchCtrl.updateValueAndValidity({ emitEvent: true });
    fixture.detectChanges();
    expect(component.searchCtrl.value).toEqual('black');
  });

  it('should return 20 dropdown options', async () => {
    component.setSearchDisplay(true);
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.dispatchEvent(new Event('focusin'));
    inputElement.nativeElement.value = 'black';
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const matOptions = document.querySelectorAll('mat-option');
    expect(matOptions.length).toBe(20);
  });

  it('should navigate when option is selected', async () => {
    component.setSearchDisplay(true);
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.dispatchEvent(new Event('focusin'));
    inputElement.nativeElement.value = 'black';
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const matOptions = document.querySelectorAll('mat-option');

    const optionToClick = matOptions[1] as HTMLElement;
    optionToClick.click();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith([
      505642,
      'Black Panther: Wakanda Forever',
    ]);
  });
});
