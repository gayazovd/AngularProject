import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(startDate: Date): string {
    const format = 'YYYY-MM-DD';
    return moment(startDate).format(format);
  }

}
