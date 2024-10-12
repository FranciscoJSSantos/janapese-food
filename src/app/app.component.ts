import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from './components/banner/banner.component';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './components/header/header.component';
import { FistComponent } from './components/fist/fist.component';
import { SecondComponent } from './components/second/second.component';
import { LocaleComponent } from './components/locale/locale.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    BannerComponent,
    HeaderComponent,
    FistComponent,
    SecondComponent,
    LocaleComponent,
    ExperienciaComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'japanese-restaurant';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
