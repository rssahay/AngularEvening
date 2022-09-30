import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountoffersComponent } from './discountoffers.component';

describe('DiscountoffersComponent', () => {
  let component: DiscountoffersComponent;
  let fixture: ComponentFixture<DiscountoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
