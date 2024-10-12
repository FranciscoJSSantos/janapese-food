import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/photo-service.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [GalleriaModule, FormsModule],
})
export class BannerComponent implements OnInit {
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  handleValueChange(event: any) {
    this.images = event; // Update the bound property as needed.
  }

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
  }
}
