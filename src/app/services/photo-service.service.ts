import { Inject, Injectable } from '@angular/core';

const BANNER_IMAGES: any[] = [
  {
    itemImageSrc: 'assets/banner/sushi1.png',
    thumbnailImageSrc: 'assets/banner/sushi1.png',
    alt: 'Sushi 1',
    title: 'Sushi 1',
  },
  {
    itemImageSrc: 'assets/banner/sushi2.png',
    thumbnailImageSrc: 'assets/banner/sushi2.png',
    alt: 'Sushi 2',
    title: 'Sushi 2',
  },
  {
    itemImageSrc: 'assets/banner/sushi3.png',
    thumbnailImageSrc: 'assets/banner/sushi3.png',
    alt: 'Sushi 3',
    title: 'Sushi 3',
  },
  {
    itemImageSrc: 'assets/banner/sushi4.png',
    thumbnailImageSrc: 'assets/banner/sushi4.png',
    alt: 'Sushi 4',
    title: 'Sushi 4',
  },
  {
    itemImageSrc: 'assets/banner/sushi5.png',
    thumbnailImageSrc: 'assets/banner/sushi5.png',
    alt: 'Sushi 5',
    title: 'Sushi 5',
  },
];
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImages(): Promise<any[]> {
    return Promise.resolve(BANNER_IMAGES);
  }
}
