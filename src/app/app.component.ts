import { Component } from '@angular/core';
import { Course } from './app.model';
import { FilterPipe } from './filter.pipe';
import { stringify } from '@angular/core/src/util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private coursesItems: Course[] = [
        {
            listItem: [{ id: 1, title: 'Course 1', video: 'link', students: 22, startDate: new Date('2019-07-21'), duration: 99, star: false },
            { id: 2, title: 'Course 2', video: 'link', students: 2, startDate: new Date('2019-08-23'), duration: 60, star: false },
            { id: 3, title: 'Course 3', video: 'link', students: 31, startDate: new Date('2019-07-20'), duration: 44, star: false }]
        },
        {
            listItem: [{ id: 1, title: 'Course 1', video: 'link', students: 22, startDate: new Date('2019-07-21'), duration: 123, star: false },
            { id: 2, title: 'Course 2', video: 'link', students: 2, startDate: new Date('2019-08-24'), duration: 1831, star: false }
            ]
        },
    ];
    public courses: Course[] = this.coursesItems;
    title = 'Courses-angular';

    searchCourse(str: string) {
        this.courses = new FilterPipe().transform(str, this.coursesItems);
    }
}
