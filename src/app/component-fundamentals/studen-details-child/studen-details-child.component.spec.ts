import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDetailsChildComponent } from './studen-details-child.component';

describe('StudenDetailsChildComponent', () => {
  let component: StudenDetailsChildComponent;
  let fixture: ComponentFixture<StudenDetailsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenDetailsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
