import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModelComponent } from "../../components/menu/menu-model/menu-model.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer/footer.component";
import { MenuItem } from '../../components/menu/interfaces/menu-list.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MenuModelComponent, CommonModule, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  imageUrl: string = 'assets/img/transforLogo.png';
      menuList: MenuItem[] = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Servicios',
      children: [
        { label: 'Consultoría', path: '/servicios/consultoria' },
        { label: 'Desarrollo', path: '/servicios/desarrollo' }
      ]
    },
    {
      label: 'Contacto',
      path: '/contact'
    }
  ];
}
