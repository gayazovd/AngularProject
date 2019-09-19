import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ɵConsole } from '@angular/core';
import { ListItem, CreatedListItem, AuthorFromServer } from 'src/app/app.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../../add-course/add-course.component.scss']
})
export class CourseFormComponent implements OnInit, OnChanges {
  @Input() listItem: ListItem;
  @Output() save = new EventEmitter<ListItem>();
  authorsFromServer: Observable<AuthorFromServer[]>

  public courseInformation = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
    length: new FormControl(),
    authors: new FormControl()
  })

  constructor(private router: Router, private coursesService: CoursesDataService) { }

  get authors() {
    return this.courseInformation.get('authors') as FormArray;
  }

  ngOnInit() {
    this.authorsFromServer = this.coursesService.getAuthors()
  }

  ngOnChanges() {
    if (this.listItem) {
      this.courseInformation.patchValue(
        {
          id: this.listItem.id,
          name: this.listItem.name,
          description: this.listItem.description,
          date: this.listItem.date,
          length: this.listItem.length,
          authors: this.listItem.authors
        }
      )
    }
  }

  saveListItem() {
    this.save.emit(this.courseInformation.value)
  }




  cancel() {
    this.router.navigate(['/courses-page']);
  }

}
