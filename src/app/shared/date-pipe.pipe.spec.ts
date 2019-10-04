import { DatePipePipe } from './date-pipe.pipe';
import * as moment from "moment";

describe('DatePipePipe', () => {
  let pipe;
  let mockDate;

  it('create an instance', () => {
    const pipe = new DatePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('check work pipe', () => {
    const format = "YYYY-MM-DD"
    mockDate = new Date();
    const result = moment(mockDate).format(format);
    pipe = new DatePipePipe();
    expect(pipe.transform(mockDate)).toEqual(result);
  });
});
