import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensSectionComponent } from './mens-section.component';

describe('MensSectionComponent', () => {
  let component: MensSectionComponent;
  let fixture: ComponentFixture<MensSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
