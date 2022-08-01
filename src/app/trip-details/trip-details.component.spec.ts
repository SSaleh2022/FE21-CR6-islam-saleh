import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tripDetailsComponent } from './trip-details.component';

describe('tripDetailsComponent', () => {
  let component: tripDetailsComponent;
  let fixture: ComponentFixture<tripDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tripDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
