import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExScreenfullComponent } from './ex-screenfull.component';

describe('ExScreenfullComponent', () => {
  let component: ExScreenfullComponent;
  let fixture: ComponentFixture<ExScreenfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExScreenfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExScreenfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
