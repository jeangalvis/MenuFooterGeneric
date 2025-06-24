import { Component, inject } from '@angular/core';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {

  private menuService = inject(MenuServiceService)

  toggle() {
    this.menuService.toggle();
  }
}
