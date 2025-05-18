import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroSortVipe',
})
export class HeroSortVipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
