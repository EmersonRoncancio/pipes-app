import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { AppComponent } from "../../app.component";
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'basic-page',
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {

  lowercase = signal('EMERSON');
  uppercase = signal('emerson');
  titlecase = signal('eMeRson');

  customDate = signal(new Date());

  updateDate = effect((onClear)=> {

    const interval = setInterval(()=>{
      this.customDate.set(new Date());
    })

    onClear(()=>{
      clearInterval(interval);
    })
  })
 }
