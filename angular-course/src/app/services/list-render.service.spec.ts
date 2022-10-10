import { TestBed } from '@angular/core/testing';

import { ListRenderService } from './list-render.service';

describe('ListRenderService', () => {
  let service: ListRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
