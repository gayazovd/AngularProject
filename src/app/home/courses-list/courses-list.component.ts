import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { AppCourses, ListItem, Course } from '../../app.model';
import { PopupService } from 'src/app/core/popup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
    constructor(private popup: PopupService, private route: Router) {

    }
    @Input() public listItem: AppCourses;
    @Input() public courseId: number;
    @Output() remove = new EventEmitter<Course>()

    ngOnInit() { console.log(this.listItem) }

    addLesson(e) {
        this.route.navigate(['courses-page/new'])
    }

    delete(course: ListItem) {
        this.remove.emit({ id: this.courseId, listItem: [course] })
    }

}
