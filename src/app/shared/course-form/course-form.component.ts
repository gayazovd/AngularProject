import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ListItem, CreatedListItem } from 'src/app/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../../add-course/add-course.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() listItem: ListItem;
  @Output() save = new EventEmitter<ListItem>();
  public flag: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!this.listItem) {
      this.listItem = { id: Date.now(), name: '', description: null, length: null, isTopRated: false, date: new Date(), authors: null }
    }
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
