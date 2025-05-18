import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterQuery',
})
export class FilterQueryPipe implements PipeTransform {

  transform(value: Hero[], query: string): Hero[] {
    return value.filter((hero)=>
      hero.name.toLowerCase().includes(query.toLowerCase()));
  }

}
