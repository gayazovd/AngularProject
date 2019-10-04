import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { CoursesDataService } from './courses-data.service';
import { of } from 'rxjs';
import { HttpService } from './http.service';
import { LoadingService } from './loading.service';

describe('CoursesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesDataService, HttpService, LoadingService]
    })
  });

  it('should be created', inject([CoursesDataService], (service: CoursesDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('should call methods', () => {
    let fakeData = [{
      id: 1,
      listItem: [{
        id: 1,
        name: 'aaa',
        authors: [{
          id: 1,
          firstName: 'ass',
          name: 'saa'
        }],
        date: new Date(),
        length: 2,
        isTopRated: true,
        description: 'asasas'
      },
      {
        id: 3,
        name: 'aaa',
        authors: [{
          id: 1,
          firstName: 'ass',
          name: 'saa'
        }],
        date: new Date(),
        length: 2,
        isTopRated: true,
        description: 'asasas'
      }]
    },
    {
      id: 2, listItem: [{
        id: 2,
        name: 'aaa',
        authors: [{
          id: 1,
          firstName: 'ass',
          name: 'saa'
        }],
        date: new Date(),
        length: 2,
        isTopRated: true,
        description: 'asasas'
      },
      {
        id: 3,
        name: 'aaa',
        authors: [{
          id: 1,
          firstName: 'ass',
          name: 'saa'
        }],
        date: new Date(),
        length: 2,
        isTopRated: true,
        description: 'asasas'
      }]
    }, {
      id: 3,
      listItem: [
        {
          id: 3,
          name: 'aaa',
          authors: [
            {
              id: 1,
              firstName: 'ass',
              name: 'saa'
            }],
          date: new Date(),
          length: 2,
          isTopRated: true,
          description: 'asasas'
        }, {
          id: 4,
          name: 'aaa',
          authors: [{
            id: 1,
            firstName: 'ass',
            name: 'saa'
          }],
          date: new Date(),
          length: 2,
          isTopRated: true,
          description: 'asasas'
        }]
    }];;

    it('should call courses list', inject([CoursesDataService, HttpService, LoadingService], (service: CoursesDataService, http: HttpService) => {
      http.paging = jasmine.createSpy('paging').and.callFake(() => of({ body: fakeData, count: 0 }));
      service.getList(0, 3)
      expect(http.paging).toHaveBeenCalledWith(0, 3)
    }));

    it('should getData courses list', fakeAsync(inject([CoursesDataService, HttpService, LoadingService], (service: CoursesDataService, http: HttpService) => {
      http.paging = jasmine.createSpy('paging').and.callFake(() => of({ body: fakeData, count: 0 }));
      service.getList(0, 3).subscribe(value => {
        expect(value).toEqual([{ body: fakeData, count: 0 }, jasmine.any(Number)])
      })
      tick(500);
    })));


  })
});
