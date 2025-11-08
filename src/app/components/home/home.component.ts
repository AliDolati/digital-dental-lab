import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  currentSlide = 0;
  slideInterval: any;
  totalSlides = 3;

  // خدمات ویژه
  featuredServices = [
    {
      icon: '🌟',
      title: 'لمینیت سرامیکی',
      description: 'ساخت لمینیت‌های نازک و طبیعی با بالاترین کیفیت',
      features: [
        'ضخامت ۰.۳ تا ۰.۵ میلی‌متر',
        'مقاومت فوق‌العاده در برابر سایش',
        'طبیعی‌ترین ظاهر ممکن',
        'گارانتی ۵ ساله'
      ],
      link: '/services'
    },
    {
      icon: '🦷',
      title: 'روکش دیجیتال',
      description: 'روکش‌های تمام سرامیکی با تکنولوژی CAD/CAM',
      features: [
        'دقت ۲۰ میکرون',
        'زمان تحویل ۲۴ ساعته',
        'ساخته شده از زیرکونیوم',
        'انطباق کامل با دندان'
      ],
      link: '/services'
    },
    {
      icon: '🔩',
      title: 'ایمپلنت',
      description: 'پروتزهای ثابت روی ایمپلنت با انطباق کامل',
      features: [
        'انطباق کامل با پایه ایمپلنت',
        'استحکام و دوام بالا',
        'زیبایی طبیعی',
        'کارکرد مشابه دندان طبیعی'
      ],
      link: '/services'
    },
    {
      icon: '🦿',
      title: 'پروتز متحرک',
      description: 'پروتزهای متحرک با راحتی و ظاهر طبیعی',
      features: [
        'راحتی کامل بیمار',
        'ظاهر کاملاً طبیعی',
        'استحکام بالا',
        'قابلیت ترمیم و تعمیر'
      ],
      link: '/services'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  // توابع اسلایدر
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startAutoSlide();
    }
  }

  // ناوبری
  navigateTo(link: string) {
    window.location.href = link;
  }

  navigateToContact() {
    window.location.href = '/contact';
  }

  navigateToServices() {
    window.location.href = '/services';
  }

  navigateToGallery() {
    window.location.href = '/gallery';
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}