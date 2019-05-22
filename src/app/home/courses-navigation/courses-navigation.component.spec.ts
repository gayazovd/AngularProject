import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNavigationComponent } from './courses-navigation.component';

describe('CoursesNavigationComponent', () => {
  let component: CoursesNavigationComponent;
  let fixture: ComponentFixture<CoursesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
