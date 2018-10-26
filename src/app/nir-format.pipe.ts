import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nirFormat'
})
export class NirFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value = value || '';
    const result = value.substr(0, 1) + ' ' +
      value.substr(1, 2) + ' ' +
      value.substr(3, 2) + ' ' +
      value.substr(5, 2) + ' ' +
      value.substr(7, 3) + ' ' +
      value.substr(10, 3) + ' (' +
      value.substr(13, 2) + ')';
    return result;
  }

}
