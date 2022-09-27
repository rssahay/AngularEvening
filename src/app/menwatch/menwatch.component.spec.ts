import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenwatchComponent } from './menwatch.component';

describe('MenwatchComponent', () => {
  let component: MenwatchComponent;
  let fixture: ComponentFixture<MenwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
