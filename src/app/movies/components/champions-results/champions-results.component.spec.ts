import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsResultsComponent } from './champions-results.component';

describe('ChampionsResultsComponent', () => {
  let component: ChampionsResultsComponent;
  let fixture: ComponentFixture<ChampionsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
