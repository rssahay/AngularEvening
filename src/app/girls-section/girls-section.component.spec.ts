import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsSectionComponent } from './girls-section.component';

describe('GirlsSectionComponent', () => {
  let component: GirlsSectionComponent;
  let fixture: ComponentFixture<GirlsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
