import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'custom-page',
  imports: [],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent {

 }
