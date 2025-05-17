import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'styleColor',
})
export class StyleColorPipe implements PipeTransform {

  transform(value: Color): string {

    const colorValue = ColorMap[value];

    return colorValue;
  }

}
