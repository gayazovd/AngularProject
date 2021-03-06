import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../app.model';

@Pipe({
    name: 'authorsPipe'
})
export class AuthorsPipe implements PipeTransform {

    transform(value: Author[]): string {
        if (value === null) return;
        if (typeof value === 'string') return value;
        let str = "";
        value.forEach(author => {
            if (value.length > 1) {
                str += author.firstName + ' ' + author.name + ', ';
            } else {
                str += author.firstName + ' ' + author.name;
            }
        })
        return str;
    }

}