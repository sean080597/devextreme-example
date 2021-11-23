import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFilteringComponent } from './ex-filtering.component';

describe('ExFilteringComponent', () => {
  let component: ExFilteringComponent;
  let fixture: ComponentFixture<ExFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
