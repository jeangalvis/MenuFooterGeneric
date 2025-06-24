import { Component, inject, Input, OnDestroy } from '@angular/core';
import { MenuItem } from '../interfaces/menu-list.interface';
import { MenuServiceService } from '../services/menu-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-links-mobile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-links-mobile.component.html',
})
export class MenuLinksMobileComponent {
  @Input() menuList: MenuItem[] = [];

  isMenuOpen = false;

  constructor(private menuService: MenuServiceService) {
    this.menuService.menuOpen$.
      pipe(takeUntilDestroyed())
      .subscribe(
        (isOpen) => (this.isMenuOpen = isOpen)
      );
  }

  openSubMenus = new Set<string>();

  toggleSubMenu(label: string) {
    if (this.openSubMenus.has(label)) {
      this.openSubMenus.delete(label);
    } else {
      this.openSubMenus.add(label);
    }
  }

  isSubMenuOpen(label: string): boolean {
    return this.openSubMenus.has(label);
  }
}