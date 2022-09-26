import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolParentComponent } from './school-parent.component';

describe('SchoolParentComponent', () => {
  let component: SchoolParentComponent;
  let fixture: ComponentFixture<SchoolParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
