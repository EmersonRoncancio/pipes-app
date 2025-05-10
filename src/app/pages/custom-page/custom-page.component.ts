import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

const names = [
  'Alice Smith',
  'Bob Johnson',
  'Charlie Brown',
  'Diana Prince',
  'Ethan Hunt'
];

@Component({
  selector: 'custom-page',
  imports: [CardComponent, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent {

  users = signal(names);

 user = {
    name: 'Emerson',
    age: 25,
    email: 'emerson@gmail.com'
 }
 }
