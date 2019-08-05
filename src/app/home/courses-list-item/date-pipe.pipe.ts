import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(startDate: Date): string {
    const format = 'DD.MM.YYYY';
    return moment(startDate).format(format);
  }

}
