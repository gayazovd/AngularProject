import { Directive } from '@angular/core';
import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import * as moment from 'moment';
import { error } from 'util';

@Directive({
  selector: '[appDateFormatValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatValidatorDirective, multi: true }]
})
export class DateFormatValidatorDirective implements Validator {

  public emptyField: boolean = false;

  constructor() { }

  validate(control: FormControl): ValidationErrors {
    if (!control.value) {
      this.emptyField = true;
    } else {
      this.emptyField = false;
    }
    if (control.untouched) {
      return null;
    }
    const messege = {
      invalid: true
    }
    console.log(control)
    return this.emptyField ? messege : null;
  }

}
