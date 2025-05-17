import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';
import { TogglePipe } from '../../pipes/toggle.pipe';
import {heroes } from '../../data/hero.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanflyPipe } from '../../pipes/canfly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { StyleColorPipe } from '../../pipes/styleColor.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-personality-page',
  imports: [TogglePipe, CanflyPipe, ColorPipe, StyleColorPipe, HeroCreatorPipe],
  templateUrl: './personality-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalityPageComponent {

  toggle = signal<boolean>(false)

  heroes = signal<Hero[]>(heroes);
  hero = linkedSignal(()=> heroes)


  onToggle() {
    this.toggle.update((prev) => !prev);
  }
}
