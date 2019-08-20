import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesDataService } from 'src/app/core/courses-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private courseService: CoursesDataService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/courses-page']);
  }

  save() {
    console.log("Сохранить курс")
  }

}
