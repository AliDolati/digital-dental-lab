import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  sliderImages: string[] = [
    'assets/slider1.jpg',
    'assets/slider2.jpg',
    'assets/slider3.jpg'
  ];
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // هر ۵ ثانیه
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
