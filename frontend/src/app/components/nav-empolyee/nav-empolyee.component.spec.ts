import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpolyeeComponent } from './nav-empolyee.component';

describe('NavEmpolyeeComponent', () => {
  let component: NavEmpolyeeComponent;
  let fixture: ComponentFixture<NavEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
