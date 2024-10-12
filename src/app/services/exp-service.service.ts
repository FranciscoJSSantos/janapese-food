import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ExpServiceService {
  http = inject(HttpClient);

  url = 'https://api.sheetbest.com/sheets/b78875be-7e61-4ec2-b15c-31d1808408a4';

  getExp(data: any) {
    return this.http.post(this.url, data).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Obrigado pelo seu tempo!',
          text: 'Sua resposta foi enviada com sucesso',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
