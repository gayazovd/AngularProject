import { Directive } from '@angular/core';
import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[appDateFormatValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatValidatorDirective, multi: true }]
})
export class DateFormatValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl): ValidationErrors {
    const date = moment(control.value);
    const messege = {
      'dateFormat': {
        'message': 'date is not correct format'
      }
    }
    return date.isValid() ? null : messege;
  }

}
