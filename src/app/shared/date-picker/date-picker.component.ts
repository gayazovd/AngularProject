import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
  },
  { provide: NG_VALIDATORS, useExisting: DatePickerComponent, multi: true }]
})
export class DatePickerComponent implements ControlValueAccessor, Validator, OnInit {

  private _date: string;
  private _controlDate: FormControl;
  public emptyField: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get controlDate() {
    return this._controlDate;
  }

  get date() {
    return this._date;
  }

  changeDate(e) {
    this.writeValue(e.target.value);
  }

  onBlur() {
    this.onTouched()
  }

  writeValue(value: string) {
    if (!value) {
      this.emptyField = true;
    } else {
      this.emptyField = false;
      const correctDate = moment(value).format('YYYY-MM-DD');
      this._date = correctDate;
    }
    this.onChange(value);
  }

  validate(control: FormControl): ValidationErrors {
    if (control.untouched) {
      return null;
    }
    const messege = {
      invalid: true
    }
    console.log(control)
    return this.emptyField ? messege : null;

  }

  onChange: any = () => { };

  onTouched: any = () => { };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
