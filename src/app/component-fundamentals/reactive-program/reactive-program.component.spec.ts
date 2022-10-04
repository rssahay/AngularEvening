import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgramComponent } from './reactive-program.component';

describe('ReactiveProgramComponent', () => {
  let component: ReactiveProgramComponent;
  let fixture: ComponentFixture<ReactiveProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
