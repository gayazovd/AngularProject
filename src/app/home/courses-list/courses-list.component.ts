import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { AppCourses, ListItem, Course } from '../../app.model';
import { PopupService } from 'src/app/core/popup.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/shared/delete-popup/delete-popup.component';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
    constructor(private popup: PopupService, private route: Router, /* public dialogRef: MatDialogRef<CoursesListComponent> */) {

    }
    @Input() public listItem: AppCourses;
    @Input() public courseId: number;
    @Output() remove = new EventEmitter<void>()

    ngOnInit() { console.log(this.listItem) }

    addLesson(e) {
        this.route.navigate(['courses-page/new'])
    }

    delete() {
        this.remove.emit();
    }

}
