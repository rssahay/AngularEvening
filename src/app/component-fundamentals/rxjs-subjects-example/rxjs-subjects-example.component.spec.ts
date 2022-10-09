import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectsExampleComponent } from './rxjs-subjects-example.component';

describe('RxjsSubjectsExampleComponent', () => {
  let component: RxjsSubjectsExampleComponent;
  let fixture: ComponentFixture<RxjsSubjectsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSubjectsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSubjectsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
