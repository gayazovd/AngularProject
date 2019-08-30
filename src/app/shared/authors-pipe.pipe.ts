import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../app.model';

@Pipe({
  name: 'authorsPipe'
})
export class AuthorsPipePipe implements PipeTransform {

  transform(value: Author[]): string {
    let str = "";
    value.forEach(author => {
      if (value.length > 1) {
        str += author.firstName + ' ' + author.lastName + ', ';
      } else {
        str += author.firstName + ' ' + author.lastName;
      }
    })
    return str;
  }

}
