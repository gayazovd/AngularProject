import { DurationPipePipe } from './duration-pipe.pipe';

describe('DurationPipePipe', () => {
  let pipe;

  it('create an instance', () => {
    pipe = new DurationPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('check the correct work transform function', () => {
    pipe = new DurationPipePipe();
    expect(pipe.transform(123)).toBe('2h 03min');
  });
});
