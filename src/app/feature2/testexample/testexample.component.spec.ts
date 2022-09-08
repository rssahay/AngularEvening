import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestexampleComponent } from './testexample.component';

describe('TestexampleComponent', () => {
  let component: TestexampleComponent;
  let fixture: ComponentFixture<TestexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
