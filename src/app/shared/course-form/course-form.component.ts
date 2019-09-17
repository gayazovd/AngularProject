import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ListItem, CreatedListItem } from 'src/app/app.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../../add-course/add-course.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() listItem: ListItem;
  @Output() save = new EventEmitter<ListItem>();

  public courseInformation = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
    duration: new FormControl(),
    authors: new FormArray([
      this.createAuthors()
    ])
  })

  constructor(private router: Router) { }

  get authors() {
    return this.courseInformation.get('authors') as FormArray;
  }

  ngOnInit() {
    if (this.listItem) {
      this.courseInformation.setValue(
        {
          name: this.listItem.name,
          description: this.listItem.description,
          date: this.listItem.date,
          duration: this.listItem.length,
          authors: this.listItem.authors
        }
      )
    }
  }


  createAuthors() {
    return new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

  saveListItem() {
    this.save.emit(this.listItem)
  }


  onKeyInput(event) {
    this.listItem.authors = event.target.value;
  }

  cancel() {
    this.router.navigate(['/courses-page']);
  }

}
