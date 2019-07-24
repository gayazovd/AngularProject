import { Component } from '@angular/core';
import { Course } from './app.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public coursesItems: Course[] = [
        {
            listItem: [{ id: 1, title: 'Course 1', video: 'link', students: 22, startDate: '21.07.2019', duration: '1h 22min' },
            { id: 2, title: 'Course 2', video: 'link', students: 2, startDate: '21.08.2019', duration: '1h 32min' },
            { id: 3, title: 'Course 3', video: 'link', students: 31, startDate: '02.08.2019', duration: '1h 33min' }]
        },
        {
            listItem: [{ id: 1, title: 'Course 1', video: 'link', students: 22, startDate: '21.07.2019', duration: '1h 22min' },
            { id: 2, title: 'Course 2', video: 'link', students: 2, startDate: '21.08.2019', duration: '1h 32min' }
            ]
        },
    ];
    title = 'Courses-angular';
}
