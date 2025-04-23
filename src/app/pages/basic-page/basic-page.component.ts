import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AppComponent } from "../../app.component";
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'basic-page',
  imports: [AppComponent, LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {

  lowercase = signal('EMERSON');
  uppercase = signal('emerson');
  titlecase = signal('eMeRson');

 }
