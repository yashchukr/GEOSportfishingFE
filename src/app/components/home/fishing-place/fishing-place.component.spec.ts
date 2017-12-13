import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingPlaceComponent } from './fishing-place.component';

describe('FishingPlaceComponent', () => {
  let component: FishingPlaceComponent;
  let fixture: ComponentFixture<FishingPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
