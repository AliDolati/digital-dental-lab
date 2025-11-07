import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'assets/gallery1.jpg',
    'assets/gallery2.jpg',
    'assets/gallery3.jpg',
    'assets/gallery4.jpg',
    'assets/gallery5.jpg',
    'assets/gallery6.jpg'
  ];
}
