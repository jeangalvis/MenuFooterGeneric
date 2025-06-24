import { Component, Input } from '@angular/core';
import { MenuItem } from '../interfaces/menu-list.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-links.component.html',
})
export class MenuLinksComponent {

  @Input() menuList: MenuItem[] = [];

}
