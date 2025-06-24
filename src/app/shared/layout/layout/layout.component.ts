import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModelComponent } from "../../components/menu/menu-model/menu-model.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MenuModelComponent, CommonModule, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent { }
