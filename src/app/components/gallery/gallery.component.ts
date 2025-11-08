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
      id: 1,
      category: 'روکش دیجیتال',
      before: {
        title: 'قبل از درمان',
        description: 'دندان‌های فرسوده و نیازمند ترمیم',
        image: 'assets/images/gallery/crown-before.jpg',
        placeholder: '🦷 دندان‌های فرسوده'
      },
      after: {
        title: 'بعد از درمان', 
        description: 'روکش‌های دیجیتال با دقت بالا',
        image: 'assets/images/gallery/crown-after.jpg',
        placeholder: '💎 روکش دیجیتال'
      },
      description: 'نمونه کار روکش دیجیتال با دقت بالا - طراحی شده با CAD/CAM',
      featured: true,
      technology: 'CAD/CAM',
      duration: '۲ جلسه',
      result: 'بازیابی کامل عملکرد و زیبایی'
    },
    {
      id: 2,
      category: 'لمینیت سرامیکی',
      before: {
        title: 'قبل از درمان',
        description: 'لبخند نامتقارن و دندان‌های زرد',
        image: 'assets/images/gallery/veneer-before.jpg',
        placeholder: '😔 لبخند نامتقارن'
      },
      after: {
        title: 'بعد از درمان',
        description: 'لبخند هالیوودی با لمینیت سرامیکی',
        image: 'assets/images/gallery/veneer-after.jpg',
        placeholder: '✨ لبخند هالیوودی'
      },
      description: 'لبخند هالیوودی با لمینیت سرامیکی نازک و طبیعی',
      featured: true,
      technology: 'Digital Smile Design',
      duration: '۳ جلسه', 
      result: 'لبخند طبیعی و جذاب'
    },
    {
      id: 3,
      category: 'ایمپلنت',
      before: {
        title: 'قبل از درمان',
        description: 'از دست دادن دندان‌های عقبی',
        image: 'assets/images/gallery/implant-before.jpg',
        placeholder: '🚫 فقدان دندان'
      },
      after: {
        title: 'بعد از درمان',
        description: 'ایمپلنت با عملکرد کامل',
        image: 'assets/images/gallery/implant-after.jpg',
        placeholder: '🔩 ایمپلنت کامل'
      },
      description: 'کاشت دندان با ایمپلنت پیشرفته - بازیابی عملکرد کامل',
      featured: false,
      technology: 'Guided Surgery',
      duration: '۴ جلسه',
      result: 'بازیابی عملکرد جویدن'
    },
    {
      id: 4,
      category: 'پروتز متحرک',
      before: {
        title: 'قبل از درمان', 
        description: 'فقدان چندین دندان',
        image: 'assets/images/gallery/denture-before.jpg',
        placeholder: '😟 فقدان دندان‌ها'
      },
      after: {
        title: 'بعد از درمان',
        description: 'پروتز متحرک با کیفیت',
        image: 'assets/images/gallery/denture-after.jpg',
        placeholder: '🦿 پروتز متحرک'
      },
      description: 'پروتز متحرک با کیفیت عالی و راحتی بیمار',
      featured: false,
      technology: '3D Printing',
      duration: '۳ جلسه',
      result: 'راحتی و عملکرد طبیعی'
    }
  ];

  videoTutorials = [
    {
      id: 1,
      title: 'مراحل ساخت روکش دیجیتال',
      description: 'فرآیند کامل طراحی و ساخت روکش با تکنولوژی CAD/CAM',
      thumbnail: 'assets/images/gallery/crown-process-thumb.jpg',
      duration: '۲:۳۰',
      category: 'تکنولوژی'
    },
    {
      id: 2, 
      title: 'نحوه مراقبت از لمینیت',
      description: 'راهنمای کامل مراقبت و نگهداری از لمینیت سرامیکی',
      thumbnail: 'assets/images/gallery/veneer-care-thumb.jpg',
      duration: '۳:۱۵',
      category: 'مراقبت'
    },
    {
      id: 3,
      title: 'فرآیند ایمپلنت دیجیتال',
      description: 'مراحل کاشت ایمپلنت با راهنمای دیجیتال',
      thumbnail: 'assets/images/gallery/implant-process-thumb.jpg',
      duration: '۴:۲۰',
      category: 'ایمپلنت'
    }
  ];

  selectedCategory = 'همه';
  categories = ['همه', 'روکش دیجیتال', 'لمینیت سرامیکی', 'ایمپلنت', 'پروتز متحرک'];
  activeTab: 'gallery' | 'videos' = 'gallery';
  
  // برای lightbox
  selectedImage: any = null;
  lightboxOpen = false;
  selectedVideo: any = null;
  videoModalOpen = false;

  filterGallery(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    if (this.selectedCategory === 'همه') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  // توابع lightbox
  openLightbox(item: any, type: 'before' | 'after') {
    this.selectedImage = {
      item: item,
      type: type,
      title: type === 'before' ? item.before.title : item.after.title,
      description: type === 'before' ? item.before.description : item.after.description
    };
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = null;
  }

  nextImage() {
    const currentIndex = this.galleryItems.findIndex(item => item.id === this.selectedImage.item.id);
    const nextIndex = (currentIndex + 1) % this.galleryItems.length;
    this.selectedImage = {
      item: this.galleryItems[nextIndex],
      type: 'after',
      title: this.galleryItems[nextIndex].after.title,
      description: this.galleryItems[nextIndex].after.description
    };
  }

  prevImage() {
    const currentIndex = this.galleryItems.findIndex(item => item.id === this.selectedImage.item.id);
    const prevIndex = (currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
    this.selectedImage = {
      item: this.galleryItems[prevIndex],
      type: 'after', 
      title: this.galleryItems[prevIndex].after.title,
      description: this.galleryItems[prevIndex].after.description
    };
  }

  // توابع ویدئو
  openVideo(video: any) {
    this.selectedVideo = video;
    this.videoModalOpen = true;
  }

  closeVideo() {
    this.videoModalOpen = false;
    this.selectedVideo = null;
  }

  // تغییر تب
  setActiveTab(tab: 'gallery' | 'videos') {
    this.activeTab = tab;
  }
}