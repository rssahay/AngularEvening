import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExamplesComponent } from './reactive-forms-examples.component';

describe('ReactiveFormsExamplesComponent', () => {
  let component: ReactiveFormsExamplesComponent;
  let fixture: ComponentFixture<ReactiveFormsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
