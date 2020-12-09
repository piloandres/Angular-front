import { TestBed } from '@angular/core/testing';

import { SvTerminalGenericaService } from './sv-terminal-generica.service';

describe('SvTerminalGenericaService', () => {
  let service: SvTerminalGenericaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvTerminalGenericaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
