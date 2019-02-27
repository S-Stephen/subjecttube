import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentsubjectComponent } from './currentsubject.component';

describe('CurrentsubjectComponent', () => {
  let component: CurrentsubjectComponent;
  let fixture: ComponentFixture<CurrentsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
