import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  // خدمات واقعی لابراتوار دندانپزشکی
  galleryItems = [
    {
      id: 1,
      category: 'روکش زیرکونیا',
      before: {
        title: 'قبل از درمان',
        description: 'دندان آسیاب فرسوده',
        image: 'assets/images/gallery/zirconia/before-1.jpg',
        placeholder: 'دندان آسیاب فرسوده'
      },
      after: {
        title: 'بعد از درمان', 
        description: 'روکش زیرکونیای کامل',
        image: 'assets/images/gallery/zirconia/after-1.jpg',
        placeholder: 'روکش زیرکونیا'
      },
      description: 'روکش کامل زیرکونیا برای دندان آسیاب با استحکام و زیبایی بالا',
      featured: true,
      technology: 'CAD/CAM',
      duration: '۲ روز',
      material: 'زیرکونیای پرچگال'
    },
    {
      id: 2,
      category: 'روکش IPS Emax',
      before: {
        title: 'قبل از درمان',
        description: 'دندان جلو شکسته',
        image: 'assets/images/gallery/emax/before-1.jpg',
        placeholder: 'دندان جلو شکسته'
      },
      after: {
        title: 'بعد از درمان',
        description: 'روکش Emax شفاف',
        image: 'assets/images/gallery/emax/after-1.jpg',
        placeholder: 'روکش IPS Emax'
      },
      description: 'روکش IPS Emax برای دندان‌های جلو با شفافیت طبیعی',
      featured: true,
      technology: 'CAD/CAM',
      duration: '۳ روز',
      material: 'سرامیک شیشه‌ای'
    },
    {
      id: 3,
      category: 'لمینیت سرامیکی',
      before: {
        title: 'قبل از درمان',
        description: 'لبخند نامتقارن',
        image: 'assets/images/gallery/veneer/before-1.jpg',
        placeholder: 'لبخند نامتقارن'
      },
      after: {
        title: 'بعد از درمان',
        description: 'لمینیت هالیوودی',
        image: 'assets/images/gallery/veneer/after-1.jpg',
        placeholder: 'لمینیت سرامیکی'
      },
      description: 'لمینیت سرامیکی نازک برای اصلاح طرح لبخند',
      featured: false,
      technology: 'Digital Smile Design',
      duration: '۴ روز',
      material: 'سرامیک دندانی'
    },
    {
      id: 4,
      category: 'پست زیرکونیا',
      before: {
        title: 'قبل از درمان', 
        description: 'دندان ترمیم شده',
        image: 'assets/images/gallery/post/before-1.jpg',
        placeholder: 'دندان ترمیم شده'
      },
      after: {
        title: 'بعد از درمان',
        description: 'پست و کور زیرکونیا',
        image: 'assets/images/gallery/post/after-1.jpg',
        placeholder: 'پست زیرکونیا'
      },
      description: 'پست و کور زیرکونیا برای دندان‌های اندو شده',
      featured: false,
      technology: 'CAD/CAM',
      duration: '۲ روز',
      material: 'زیرکونیای مونولیت'
    },
    {
      id: 5,
      category: 'اندو کران',
      before: {
        title: 'قبل از درمان',
        description: 'دندان پرشده قدیمی',
        image: 'assets/images/gallery/endocrown/before-1.jpg',
        placeholder: 'دندان پرشده قدیمی'
      },
      after: {
        title: 'بعد از درمان', 
        description: 'اندو کران یکپارچه',
        image: 'assets/images/gallery/endocrown/after-1.jpg',
        placeholder: 'اندو کران'
      },
      description: 'اندو کران یکپارچه برای دندان‌های اندو شده عقب',
      featured: false,
      technology: 'CAD/CAM',
      duration: '۳ روز',
      material: 'زیرکونیای تقویت شده'
    },
    {
      id: 6,
      category: 'PMMA (کرون موقت)',
      before: {
        title: 'قبل از درمان',
        description: 'دندان آماده شده',
        image: 'assets/images/gallery/pmma/before-1.jpg',
        placeholder: 'دندان آماده شده'
      },
      after: {
        title: 'بعد از درمان',
        description: 'کرون موقت PMMA',
        image: 'assets/images/gallery/pmma/after-1.jpg',
        placeholder: 'کرون موقت'
      },
      description: 'کرون موقت PMMA با دوام و زیبایی مناسب',
      featured: false,
      technology: '۳D Printing',
      duration: '۱ روز',
      material: 'PMMA دندانپزشکی'
    },
    {
      id: 7,
      category: 'نایت گارد',
      before: {
        title: 'قبل از درمان',
        description: 'دندان‌های ساییده شده',
        image: 'assets/images/gallery/nightguard/before-1.jpg',
        placeholder: 'سایش دندانی'
      },
      after: {
        title: 'بعد از درمان',
        description: 'نایت گارد نرم',
        image: 'assets/images/gallery/nightguard/after-1.jpg',
        placeholder: 'نایت گارد نرم'
      },
      description: 'نایت گارد نرم برای محافظت از دندان‌ها در شب',
      featured: false,
      technology: 'وکیوم فرمینگ',
      duration: '۱ روز',
      material: 'سیلیکون نرم'
    },
    {
      id: 8,
      category: 'بیلیچینگ ترِی',
      before: {
        title: 'قبل از درمان',
        description: 'رنگ زرد دندان‌ها',
        image: 'assets/images/gallery/bleaching/before-1.jpg',
        placeholder: 'رنگ زرد دندان'
      },
      after: {
        title: 'بعد از درمان',
        description: 'تری سفیدکننده',
        image: 'assets/images/gallery/bleaching/after-1.jpg',
        placeholder: 'بیلیچینگ تری'
      },
      description: 'تری سفیدکننده شخصی‌سازی شده برای بلیچینگ خانگی',
      featured: false,
      technology: 'وکیوم فرمینگ',
      duration: '۱ روز',
      material: 'پلی اتیلن'
    }
  ];

  videoTutorials = [
    {
      id: 1,
      title: 'فرآیند ساخت روکش زیرکونیا',
      description: 'مراحل کامل طراحی و ساخت روکش زیرکونیا با CAD/CAM',
      thumbnail: 'assets/images/gallery/thumbs/zirconia-process.jpg',
      videoUrl: '#',
      duration: '۳:۲۰',
      category: 'زیرکونیا'
    },
    {
      id: 2, 
      title: 'طراحی دیجیتال لبخند',
      description: 'نحوه طراحی دیجیتال لبخند با نرم‌افزارهای پیشرفته',
      thumbnail: 'assets/images/gallery/thumbs/digital-design.jpg',
      videoUrl: '#',
      duration: '۴:۱۵',
      category: 'لمینیت'
    },
    {
      id: 3,
      title: 'ساخت نایت گارد',
      description: 'فرآیند ساخت نایت گارد نرم با تکنولوژی وکیوم',
      thumbnail: 'assets/images/gallery/thumbs/nightguard-process.jpg',
      videoUrl: '#',
      duration: '۲:۴۵',
      category: 'نایت گارد'
    }
  ];

  // متغیرهای فیلتر
  selectedCategory = 'همه';
  categories = ['همه', 'روکش زیرکونیا', 'روکش IPS Emax', 'لمینیت سرامیکی', 'پست زیرکونیا', 'اندو کران', 'PMMA (کرون موقت)', 'نایت گارد', 'بیلیچینگ تری'];
  activeTab: 'gallery' | 'videos' = 'gallery';
  
  // برای lightbox
  selectedImage: any = null;
  lightboxOpen = false;
  selectedVideo: any = null;
  videoModalOpen = false;

  // فیلتر کردن گالری
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
      description: type === 'before' ? item.before.description : item.after.description,
      imageUrl: type === 'before' ? item.before.image : item.after.image
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
    const nextItem = this.galleryItems[nextIndex];
    
    this.selectedImage = {
      item: nextItem,
      type: 'after',
      title: nextItem.after.title,
      description: nextItem.after.description,
      imageUrl: nextItem.after.image
    };
  }

  prevImage() {
    const currentIndex = this.galleryItems.findIndex(item => item.id === this.selectedImage.item.id);
    const prevIndex = (currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
    const prevItem = this.galleryItems[prevIndex];
    
    this.selectedImage = {
      item: prevItem,
      type: 'after', 
      title: prevItem.after.title,
      description: prevItem.after.description,
      imageUrl: prevItem.after.image
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

  // مدیریت کیبورد
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    }
    
    if (this.videoModalOpen && event.key === 'Escape') {
      this.closeVideo();
    }
  }
}