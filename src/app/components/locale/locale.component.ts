import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-locale',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './locale.component.html',
  styleUrl: './locale.component.scss',
})
export class LocaleComponent {
  goToMaps() {
    let maps =
      'https://www.google.com.br/maps/place/Hashi/@-10.931477,-37.0700592,0z/data=!4m6!3m5!1s0x71ab3b998f4c2e7:0x87a0251ed20d054!8m2!3d-10.9325218!4d-37.0700601!16s%2Fg%2F11bx4ds5ts?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D';
    window.open(maps, '_blank');
  }
}
