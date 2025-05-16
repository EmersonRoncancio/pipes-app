import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TogglePipe } from '../../pipes/toggle.pipe';

@Component({
  selector: 'app-personality-page',
  imports: [TogglePipe],
  templateUrl: './personality-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalityPageComponent {

  toggle = signal<boolean>(false);


  onToggle() {
    this.toggle.update((prev) => !prev);
  }
}
