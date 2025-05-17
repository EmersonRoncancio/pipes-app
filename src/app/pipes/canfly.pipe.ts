import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly',
})
export class CanflyPipe implements PipeTransform {

  transform(value: boolean): string {

    if(value){
      return 'Puede volar';
    }else {
      return 'No puede volar';
    }
  }

}
