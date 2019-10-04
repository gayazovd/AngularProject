import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { By } from '@angular/platform-browser';
import { CoursesNavigationComponent } from '../courses-navigation/courses-navigation.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { NO_ERRORS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from 'src/app/core/loading.service';
import { of, Subject } from 'rxjs';
import { HomeModule } from '../home.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let loadService;
  let coursesDataService;
  let mockData;
  beforeEach(() => {
    mockData = [{ id: 1, listItem: [{ id: 1 }] }, { id: 2, listItem: [{ id: 2 }] }, { id: 3, listItem: [{ id: 3 }] }, { id: 4, listItem: [{ id: 4 }] }];
    coursesDataService = {
      getList: jasmine.createSpy('getList').and.callFake(
        () => of([{ body: mockData }])
      ),
      searchingCourse: new Subject(),
      searchByCourses: jasmine.createSpy('searchByCourses').and.callFake(() => of({ body: mockData }))
    };
    loadService = { changeLoadState: jasmine.createSpy('changeLoadState') };


    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [{ provide: LoadingService, useValue: loadService }, { provide: CoursesDataService, useValue: coursesDataService }, ChangeDetectorRef],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    spyOn(component, 'loadData').and.callThrough();
    fixture.detectChanges();
  });

  describe('OnClick button', () => {
    it('should call loadData', () => {
      expect(component.loadData).toHaveBeenCalled();
    })

    it('sould call getList', () => {
      expect(coursesDataService.getList).toHaveBeenCalledWith(0, component.pageSize)
    })

  })

});
