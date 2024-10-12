import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExpServiceService } from '../../services/exp-service.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ExpServiceService],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  http = inject(HttpClient);
  expService = inject(ExpServiceService);

  url =
    'https://script.google.com/macros/s/AKfycbxO6fMsGorhnhvEJA7JB-K3w-DoMUn51jUP-9KSuhdfylNBf7RsxNKTdHWS_0IZTGgocQ/exec';

  sendExp() {
    let nome = (<HTMLInputElement>document.getElementById('nome')!).value;
    let email = (<HTMLInputElement>document.getElementById('email')!).value;
    let telefone = (<HTMLInputElement>document.getElementById('telefone')!)
      .value;
    let experiencia = (<HTMLInputElement>(
      document.getElementById('experiencia')!
    )).value;
    let radio1 = (<HTMLInputElement>document.getElementById('radio1')!).checked;
    let radio2 = (<HTMLInputElement>document.getElementById('radio2')!).checked;
    let radio3 = (<HTMLInputElement>document.getElementById('radio3')!).checked;
    let rank = 0;
    if (radio1 == true) {
      rank = 3;
    } else if (radio2 == true) {
      rank = 2;
    } else if (radio3 == true) {
      rank = 1;
    }

    let data = {
      nome: nome,
      email: email,
      telefone: telefone,
      nota: rank,
      experiencia: experiencia,
    };

    console.log(data);

    this.expService.getExp(data);
  }
}
