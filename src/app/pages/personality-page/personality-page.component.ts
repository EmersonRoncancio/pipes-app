import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';
import { TogglePipe } from '../../pipes/toggle.pipe';
import {heroes } from '../../data/hero.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanflyPipe } from '../../pipes/canfly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { StyleColorPipe } from '../../pipes/styleColor.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortVipePipe } from '../../pipes/hero-sort-vipe.pipe';
import { FilterQueryPipe } from '../../pipes/filter-query.pipe';

@Component({
  selector: 'app-personality-page',
  imports: [TogglePipe, CanflyPipe, ColorPipe, StyleColorPipe, HeroCreatorPipe, HeroSortVipePipe, FilterQueryPipe],
  templateUrl: './personality-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalityPageComponent {

  toggle = signal<boolean>(false)

  heroes = signal<Hero[]>(heroes);
  hero = linkedSignal(()=> heroes)
  sortBY = signal<keyof Hero | null>(null);
  filterQuery = signal<string>('');

  onToggle() {
    this.toggle.update((prev) => !prev);
  }

  onFilterQuery(query: string) {
    console.log(query);
    this.filterQuery.update(() => query);
  }

  onSortBy(sortBy: keyof Hero) {
    this.sortBY.update(() => sortBy);
  }
}
