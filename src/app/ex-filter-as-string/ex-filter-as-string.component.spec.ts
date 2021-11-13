import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFilterAsStringComponent } from './ex-filter-as-string.component';

describe('ExFilterAsStringComponent', () => {
  let component: ExFilterAsStringComponent;
  let fixture: ComponentFixture<ExFilterAsStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFilterAsStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFilterAsStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
