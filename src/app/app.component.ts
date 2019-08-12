import { Component, OnInit, DoCheck } from '@angular/core';
import { Course } from './app.model';
import { FilterPipe } from './filter.pipe';
import { CoursesDataService } from './core/courses-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

    public courses: Course[]
    title = 'Courses-angular';
    constructor(private coursesService: CoursesDataService) {
    }

    ngOnInit() {
        this.courses = this.coursesService.getList();
    }
    ngDoCheck() {
        this.courses = this.coursesService.getList();
    }

    searchCourse(str: string) {
        // this.courses = new FilterPipe().transform(str, this.coursesItems);
    }

}
