import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCheckboxComponent } from './movie-checkbox.component';

describe('MovieCheckboxComponent', () => {
  let component: MovieCheckboxComponent;
  let fixture: ComponentFixture<MovieCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
