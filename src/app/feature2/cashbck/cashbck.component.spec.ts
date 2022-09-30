import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbckComponent } from './cashbck.component';

describe('CashbckComponent', () => {
  let component: CashbckComponent;
  let fixture: ComponentFixture<CashbckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
