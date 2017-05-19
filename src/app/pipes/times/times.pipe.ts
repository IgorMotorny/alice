import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {

  transform(count: number): any {
    return _.range(0, count);
  }

}
