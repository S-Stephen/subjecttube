import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectmenuComponent } from './subjectmenu.component';

describe('SubjectmenuComponent', () => {
  let component: SubjectmenuComponent;
  let fixture: ComponentFixture<SubjectmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
