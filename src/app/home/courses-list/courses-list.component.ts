import { Component, OnInit, Input, Output } from '@angular/core';
import { AppCourses } from '../../app.model';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    constructor() {

    }
    @Input() public listItem: AppCourses;

    ngOnInit() { console.log(this.listItem) }

    addLesson(e) {
        console.log(e)
        console.log('Добавить урок!')
    }

    delete(id: number) {
        console.log(id);
    }
}
