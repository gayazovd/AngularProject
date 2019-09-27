import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ɵConsole, forwardRef } from '@angular/core';
import { ListItem, CreatedListItem, AuthorFromServer } from 'src/app/app.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../../add-course/add-course.component.scss'],
})
export class CourseFormComponent implements OnInit, OnChanges {
  @Input() listItem: ListItem;
  @Output() save = new EventEmitter<ListItem>();
  authorsFromServer: Observable<AuthorFromServer[]>

  errors: {
    name: ''
  }

  public courseInformation = new FormGroup({
    id: new FormControl(Date.now()),
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required, this.isNumber]),
    authors: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private coursesService: CoursesDataService) { }

  get authors() {
    return this.courseInformation.get('authors') as FormArray;
  }

  isNumber(control: FormControl) {
    if (!isFinite(control.value) && !(control.value === parseInt(control.value, 10))) {
      return { invalidControl: true };
    }
    return null;
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

  isControlInvalid(controlName: string): boolean {
    const control = this.courseInformation.get(controlName);
    return control.invalid && control.touched;
  }



  onSubmit() {
    const controls = this.courseInformation.controls;
    if (this.courseInformation.invalid) {
      Object.keys(controls).forEach(controlName => this.courseInformation.get(controlName).markAllAsTouched());
      return;
    }
    this.save.emit(this.courseInformation.value)
  }

  cancel() {
    this.router.navigate(['/courses-page']);
  }

}
