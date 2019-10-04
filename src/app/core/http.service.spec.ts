import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpService]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  describe('should call methods', () => {
    let mockData = [{
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
    }];
    it('check call pagging method', inject([HttpService, HttpTestingController], (httpService: HttpService, backend: HttpTestingController) => {
      httpService.paging(0, 3).subscribe(value => {
        expect(value).toEqual({ body: mockData, count: 0 })
      })

      backend.expectOne({
        method: 'GET',
        url: 'api/courses?start=0&count=3'
      }).flush({ body: mockData, count: 0 })
    }))
  })
});
