/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JeuxService } from './jeux.service';

describe('JeuxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeuxService]
    });
  });

  it('should ...', inject([JeuxService], (service: JeuxService) => {
    expect(service).toBeTruthy();
  }));
});
