import { TestBed } from '@angular/core/testing';

import { TableService } from './table.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: TableService = TestBed.get(TableService);
    expect(service).toBeTruthy();
  });
});
