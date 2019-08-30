import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/app.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform() { }

  /*   transform(value: string, courses?: Course[]): Course[] {
      const searchValue = value.replace(/\s+/g, '');
      return courses.map(course => ({ ...course, listItem: course.listItem.filter(x => x.title.replace(/\s+/g, '').toLowerCase() === searchValue.toLowerCase()) }));
    }
   */
}
