import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  galleryItems = [
    {
      category: 'روکش دیجیتال',
      before: 'قبل از درمان',
      after: 'بعد از درمان',
      description: 'نمونه کار روکش دیجیتال با دقت بالا'
    },
    {
      category: 'لمینیت سرامیکی',
      before: 'قبل از درمان', 
      after: 'بعد از درمان',
      description: 'لبخند هالیوودی با لمینیت سرامیکی'
    },
    {
      category: 'ایمپلنت',
      before: 'قبل از درمان',
      after: 'بعد از درمان',
      description: 'کاشت دندان با ایمپلنت پیشرفته'
    },
    {
      category: 'پروتز متحرک',
      before: 'قبل از درمان',
      after: 'بعد از درمان',
      description: 'پروتز متحرک با کیفیت عالی'
    }
  ];

  selectedCategory = 'همه';
  categories = ['همه', 'روکش دیجیتال', 'لمینیت سرامیکی', 'ایمپلنت', 'پروتز متحرک'];

  filterGallery(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    if (this.selectedCategory === 'همه') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }
}