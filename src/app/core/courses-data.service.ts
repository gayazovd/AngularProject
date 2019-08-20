import { Injectable } from '@angular/core';
import { Course, ListItem } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  private coursesItems: Course[] = [
    {
      listItem: [{ id: 1, title: 'Course 1', video: 'link', students: 22, description: 'asdasdasdasdasdasdasd', startDate: new Date('2019-07-21'), duration: 99, star: false },
      { id: 2, title: 'Course 2', video: 'link', students: 2, description: 'asdasdasdasdasdasdasd', startDate: new Date('2019-08-23'), duration: 60, star: false },
      { id: 3, title: 'Course 3', video: 'link', students: 31, description: 'asdasdasdasdasdasdasd', startDate: new Date('2019-07-20'), duration: 44, star: false }]
    },
    {
      listItem: [{ id: 4, title: 'Course 1', video: 'link', students: 22, description: 'asdasdasdasdasdasdasd', startDate: new Date('2019-07-21'), duration: 123, star: false },
      { id: 5, title: 'Course 2', video: 'link', students: 2, description: 'asdasdasdasdasdasdasd', startDate: new Date('2019-08-24'), duration: 1831, star: false }
      ]
    },
  ];
  constructor() { }

  getList() {
    return this.coursesItems;
  }

  createCourse(dataOfCreateCourse: ListItem, index: number) {
    this.coursesItems[index].listItem.push(dataOfCreateCourse);
  }

  getItemById(id: number) {
    let listItem: ListItem;
    this.coursesItems.forEach(course => {
      if (!listItem) {
        listItem = course.listItem.find(course => course.id === id);
      }
    });
    return listItem;
  }

  udateItem(dataOfUpdateCourse: ListItem) {
    let index: number;
    this.coursesItems.forEach(course => {
      if (index >= 0) return;
      index = course.listItem.findIndex(listItem => listItem.id === dataOfUpdateCourse.id)
    });
    this.coursesItems.forEach((course) => {
      if (course.listItem.some(listitem => listitem.id === dataOfUpdateCourse.id)) {
        course.listItem.splice(index, 1, dataOfUpdateCourse)
      }
    });
  }

  removeItem(dataOfCourse: ListItem) {
    const course = this.coursesItems.map(course => ({ ...course, listItem: course.listItem.filter(course => course.id != dataOfCourse.id) }))
    this.coursesItems = course;
    console.log(this.coursesItems)
  }
}
