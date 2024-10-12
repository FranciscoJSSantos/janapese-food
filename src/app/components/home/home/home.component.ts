import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from '../../banner/banner.component';
import { FistComponent } from '../../fist/fist.component';
import { SecondComponent } from '../../second/second.component';
import { LocaleComponent } from '../../locale/locale.component';
import { ExperienciaComponent } from '../../experiencia/experiencia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    BannerComponent,
    FistComponent,
    SecondComponent,
    LocaleComponent,
    ExperienciaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
