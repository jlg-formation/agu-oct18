import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NirComponent } from './nir.component';
import { NirFormatPipe } from '../nir-format.pipe';

describe('NirComponent', () => {
  let component: NirComponent;
  let fixture: ComponentFixture<NirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NirComponent,
      NirFormatPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
