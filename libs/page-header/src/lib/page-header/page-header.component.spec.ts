/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to Maven Movies'
    );
  });

  it('should render mini-title', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Your Number 1 stop for blockbusters'
    );
  });

  it('should render render text without category', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    component.category = 'Test Rated';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Explore our  movies'
    );
  });

  it('should render render dynamic category', () => {
    component.category = 'Test Rated';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.category).toBe('Test Rated');
    });
  });
});
