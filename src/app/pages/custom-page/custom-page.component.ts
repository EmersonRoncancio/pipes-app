import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'custom-page',
  imports: [CardComponent],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent {

 }
