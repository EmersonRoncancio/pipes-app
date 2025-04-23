import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent {

  routes = routes.map((route) => {
    return {
      title: route.title ?? '',
      path: route.path ?? '',
    }
  })

}
