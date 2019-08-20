import { Pipe, PipeTransform } from '@angular/core';

interface Duration {
  h?: number;
  m?: number;
}

@Pipe({
  name: 'durationPipe'
})

export class DurationPipePipe implements PipeTransform {


  transform(duration: number): string {
    const durationOfCourse: Duration = {};
    if (duration) {
      durationOfCourse.h = Math.round(duration / 60);
      durationOfCourse.m = duration % 60;
      return this.transformData(durationOfCourse);
    }
  }

  transformData(durationOfCourse: Duration): string {
    const realNumber = 9;
    if (durationOfCourse && durationOfCourse.m <= realNumber && durationOfCourse != 0) {
      return `${durationOfCourse.h}h 0${durationOfCourse.m}min`;
    }
    if (durationOfCourse.h && durationOfCourse.m != 0) {
      return `${durationOfCourse.h}h ${durationOfCourse.m}min`;
    }
    return `${durationOfCourse.m}min`;
  }

}
