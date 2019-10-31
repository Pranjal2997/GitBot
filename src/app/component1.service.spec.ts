import { TestBed } from '@angular/core/testing';

import { Component1Service } from './component1.service';

describe('Component1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Component1Service = TestBed.get(Component1Service);
    expect(service).toBeTruthy();
  });
});
