import { TestBed } from '@angular/core/testing';

import { LibSharedUiService } from './lib-shared-ui.service';

describe('LibSharedUiService', () => {
  let service: LibSharedUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSharedUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
