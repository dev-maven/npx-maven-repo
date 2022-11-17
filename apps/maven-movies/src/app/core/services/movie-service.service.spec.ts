/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieServiceService } from './movie-service.service';

describe('Service: MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieServiceService]
    });
  });

  it('should ...', inject([MovieServiceService], (service: MovieServiceService) => {
    expect(service).toBeTruthy();
  }));
});
