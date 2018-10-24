import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nirFormat'
})
export class NirFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value', value);
    console.log('args', args);
    return '1 74 05 54 395 279 (83)';
  }

}
