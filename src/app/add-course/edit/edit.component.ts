import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from 'src/app/app.model';
import { Router } from '@angular/router';
import { CoursesDataService } from 'src/app/core/courses-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() public listItem: ListItem

  constructor(private router: Router, private courseService: CoursesDataService) { }

  ngOnInit() {
  }

  save() {
    this.courseService.udateItem(this.listItem);
    this.router.navigate(['/courses-page']);
  }

  cancel() {
    this.router.navigate(['/courses-page']);
  }
}
