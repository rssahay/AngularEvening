import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHttpExampleComponent } from './user-http-example.component';

describe('UserHttpExampleComponent', () => {
  let component: UserHttpExampleComponent;
  let fixture: ComponentFixture<UserHttpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHttpExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHttpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
