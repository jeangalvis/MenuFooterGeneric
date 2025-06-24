import { Component, Input } from '@angular/core';
import { MenuLinksComponent } from "../menu-links/menu-links.component";
import { MenuItem } from '../interfaces/menu-list.interface';
import { MenuLinksMobileComponent } from "../menu-links-mobile/menu-links-mobile.component";
import { MenuButtonComponent } from "../menu-button/menu-button.component";

@Component({
  selector: 'app-menu-model',
  standalone: true,
  imports: [MenuLinksComponent, MenuLinksMobileComponent, MenuButtonComponent],
  templateUrl: './menu-model.component.html'
})
export class MenuModelComponent {
  @Input() menuList: MenuItem[] = [];
  @Input() imageUrl: string = '';
}
