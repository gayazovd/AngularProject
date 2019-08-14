import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Courses-angular';
    constructor() {
    }


    searchCourse(str: string) {
        // this.courses = new FilterPipe().transform(str, this.coursesItems);
    }

}
