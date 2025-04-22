import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'numbers-page',
  imports: [],
  templateUrl: './numbers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersPageComponent { }
