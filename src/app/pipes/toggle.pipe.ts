import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class TogglePipe implements PipeTransform {

  transform(value: string, upper: boolean): string {
    if (upper) {
      return value.toLowerCase();
    }else {
      return value.toUpperCase();
    }
  }
}
