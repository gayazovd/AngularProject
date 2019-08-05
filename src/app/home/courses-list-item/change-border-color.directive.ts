import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ListItem } from 'src/app/app.model';
import * as moment from 'moment';


@Directive({
  selector: '[appChangeBorderColor]'
})
export class ChangeBorderColorDirective implements OnInit {

  @Input('appChangeBorderColor') course: ListItem;
  currentDate: moment.Moment;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.currentDate = moment();
  }

  ngOnInit() {
    const color = this.transformDate(this.course.startDate);
    if (color) {
      const border = `2px solid ${color}`;
      this.renderer.setStyle(this.el.nativeElement, 'border', border);
    }
    return;
  }
  transformDate(date: Date) {
    const format = 'YYYY-MM-DD'
    const dateOfCourse = moment(date, format);
    if (dateOfCourse < this.currentDate && dateOfCourse >= this.currentDate.subtract(14, 'days')) {
      return 'green';
    }
    if (dateOfCourse > this.currentDate) {
      return 'blue'
    }

    return false;
  }
}