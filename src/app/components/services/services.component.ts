import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceCategory {
  title: string;
  description: string;
  slug: string;
  image: string;
  servicesCount: number;
  imageLoaded?: boolean;
  imageError?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  serviceCategories: ServiceCategory[] = [
    {
      title: 'Crown & Bridge',
      description: 'روکش و بریج‌های دائمی با بالاترین کیفیت و زیبایی طبیعی',
      slug: 'crown-bridge',
      image: '/assets/images/services/zirconia-crown.jpg',
      servicesCount: 2
    },
    {
      title: 'Veneers',
      description: 'ونیرهای سرامیکی برای ایجاد لبخندی زیبا و طبیعی',
      slug: 'veneers',
      image: '/assets/images/services/ceramic-veneer.jpg',
      servicesCount: 1
    },
    {
      title: 'Occlusal Appliances',
      description: 'دستگاه‌های محافظتی برای دندان قروچه و سایش دندانی',
      slug: 'occlusal-appliances',
      image: '/assets/images/services/night-guard.jpg',
      servicesCount: 1
    },
    {
      title: 'Digital Dentistry',
      description: 'خدمات دندانپزشکی دیجیتال و طراحی لبخند',
      slug: 'digital-dentistry',
      image: '/assets/images/services/waxup-design.jpg',
      servicesCount: 1
    },
    {
      title: 'Implant Solutions',
      description: 'راه‌حل‌های کامل ایمپلنت دندان با زیبایی طبیعی',
      slug: 'implant-solutions',
      image: '/assets/images/services/implant-prosthetic.jpg',
      servicesCount: 1
    },
    {
      title: 'Provisionals',
      description: 'روکش‌های موقت با کیفیت بالا برای دوره درمان',
      slug: 'provisionals',
      image: '/assets/images/services/pmma-temporary.jpg',
      servicesCount: 1
    },
    {
      title: 'In-Office Thermoforming',
      description: 'خدمات ترموفرمینگ در مطب برای قالب‌های سفارشی',
      slug: 'thermoforming',
      image: '/assets/images/services/bleaching-tray.jpg',
      servicesCount: 1
    }
  ];

  ngOnInit() {
    this.preventPageJump();
    this.preloadImages();
  }

  private preventPageJump() {
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
      document.body.style.overflow = 'auto';
    }, 100);
  }

  private preloadImages() {
    this.serviceCategories.forEach(category => {
      const img = new Image();
      img.src = category.image;
      img.onload = () => {
        category.imageLoaded = true;
        category.imageError = false;
      };
      img.onerror = () => {
        category.imageLoaded = true;
        category.imageError = true;
      };
    });
  }

  handleImageError(event: Event, category: ServiceCategory) {
    const imgElement = event.target as HTMLImageElement;
    category.imageError = true;
    category.imageLoaded = true;
    // قرار دادن تصویر جایگزین در صورت خطا
    imgElement.src = '/assets/images/placeholder.jpg';
  }

  handleImageLoad(event: Event, category: ServiceCategory) {
    category.imageLoaded = true;
    category.imageError = false;
  }

  getImageClass(category: ServiceCategory): string {
    if (!category.imageLoaded) {
      return 'category-image loading';
    }
    if (category.imageError) {
      return 'category-image loaded error';
    }
    return 'category-image loaded';
  }
}