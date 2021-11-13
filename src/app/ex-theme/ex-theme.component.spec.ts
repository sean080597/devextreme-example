import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExThemeComponent } from './ex-theme.component';

describe('ExThemeComponent', () => {
  let component: ExThemeComponent;
  let fixture: ComponentFixture<ExThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
