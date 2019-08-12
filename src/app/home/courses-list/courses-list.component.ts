import { Component, OnInit, Input, Output } from '@angular/core';
import { AppCourses, ListItem } from '../../app.model';
import { PopupService } from 'src/app/core/popup.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    constructor(private popup: PopupService) {

    }
    @Input() public listItem: AppCourses;

    ngOnInit() { console.log(this.listItem) }

    addLesson(e) {
        console.log(e)
        console.log('Добавить урок!')
    }

    delete(course: ListItem) {
        this.popup.createPopup(course);
        this.show();
    }

    show() {
        console.log(this.popup)
        this.popup.show()
    }
}
