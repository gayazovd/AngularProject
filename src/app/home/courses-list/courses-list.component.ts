import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { AppCourses, ListItem } from '../../app.model';
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

    ngOnInit() { console.log(this.listItem) }

    addLesson(e) {
        this.route.navigate(['courses-page/new'])
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
