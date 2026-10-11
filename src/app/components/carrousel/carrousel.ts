import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-carrousel',
  imports: [Button],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
  currentIndex = 0;
  images = [
    { src: 'assets/img1.jpg', alt: 'Imagen 1' },
    { src: 'assets/img2.jpg', alt: 'Imagen 2' },
    { src: 'assets/img3.jpg', alt: 'Imagen 3' }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) 
      ? this.images.length - 1 
      : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) 
      ? 0 
      : this.currentIndex + 1;
  }
}
