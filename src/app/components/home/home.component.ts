// home.component.ts - نسخه قبلی
import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  deliveryTime: string;
  accuracy: string;
  link: string;
  backgroundImage: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChild('techVideo') techVideo!: ElementRef<HTMLVideoElement>;
  
  currentSlide = 0;
  slideInterval: any;
  private autoSlideDelay = 6000;
  isMobile = false;
  isVideoPlaying = false;

  heroSlides: HeroSlide[] = [
    {
      image: 'assets/images/hero/digital-lab-hero.jpg',
      title: 'پیشرفته‌ترین لابراتوار دندان‌سازی دیجیتال',
      subtitle: 'تکنولوژی روز دنیا',
      description: 'با دستگاه‌های CAD/CAM پیشرفته، اسکنرهای سه‌بعدی و چاپگرهای دیجیتال، دقیق‌ترین پروتزهای دندانی را ارائه می‌دهیم',
      ctaText: 'مشاهده تکنولوژی‌ها',
      ctaLink: '/technology'
    },
    {
      image: 'assets/images/hero/ceramic-works.jpg',
      title: 'لمینیت و روکش‌های تمام سرامیکی',
      subtitle: 'زیبایی طبیعی',
      description: 'ساخت زیرکونیوم، ایمکس و سرامیک با بالاترین کیفیت و گارانتی معتبر - طبیعی‌ترین ظاهر ممکن',
      ctaText: 'گالری نمونه کارها',
      ctaLink: '/gallery'
    },
    {
      image: 'assets/images/hero/veneer-build.jpg', 
      title: 'ساخت لمینیت سرامیکی',
      subtitle: 'دقت و زیبایی',
      description: 'ساخت لمینیت‌های سرامیکی با بالاترین کیفیت و دقت برای لبخندی زیبا و طبیعی',
      ctaText: 'مشاوره رایگان',
      ctaLink: '/contact'
    }
  ];

  mainServices: Service[] = [
    {
      id: 'zirconia-crown',
      title: 'روکش زیرکونیا',
      description: 'روکش‌های تمام سرامیکی زیرکونیوم با استحکام و زیبایی فوق‌العاده',
      features: ['استحکام بالا (1200 MPa)', 'زیبایی طبیعی', 'بیوکمپتیبل', 'گارانتی ۵ ساله'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۲۰ میکرون',
      link: '/services/zirconia-crown',
      backgroundImage: 'assets/images/services/zirconia-crown.jpg'
    },
    {
      id: 'emax-crown',
      title: 'روکش IPS Emax',
      description: 'روکش‌های لیتیوم دی سیلیکیت با شفافیت و زیبایی استثنایی',
      features: ['شفافیت عالی', 'زیبایی طبیعی', 'مقاومت بالا', 'گارانتی ۷ ساله'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۲۵ میکرون',
      link: '/services/emax-crown',
      backgroundImage: 'assets/images/services/emax-crown.jpg'
    },
    {
      id: 'implant-prosthetic',
      title: 'پروتز ایمپلنت',
      description: 'پروتزهای ثابت روی ایمپلنت با انطباق کامل و زیبایی طبیعی',
      features: ['انطباق کامل', 'استحکام بالا', 'زیبایی طبیعی', 'کارکرد عالی'],
      deliveryTime: '۷۲ ساعت',
      accuracy: '±۱۵ میکرون',
      link: '/services/implant-prosthetic',
      backgroundImage: 'assets/images/services/implant-prosthetic.jpg'
    },
    {
      id: 'ceramic-veneer',
      title: 'لمینیت سرامیکی',
      description: 'لمینیت‌های نازک سرامیکی با طبیعی‌ترین ظاهر ممکن',
      features: ['ضخامت ۰.۳ میلی‌متر', 'طبیعی‌ترین ظاهر', 'مقاومت بالا', 'گارانتی ۷ ساله'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۲۵ میکرون',
      link: '/services/ceramic-veneer',
      backgroundImage: 'assets/images/services/ceramic-veneer.jpg'
    },
    {
      id: 'zirconia-post',
      title: 'پست زیرکونیا',
      description: 'پست‌های زیرکونیایی با Base برای بازسازی دندان‌های اندو شده',
      features: ['استحکام بالا', 'بیوکمپتیبل', 'شفافیت', 'انطباق کامل'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۲۰ میکرون',
      link: '/services/zirconia-post',
      backgroundImage: 'assets/images/services/zirconia-post.jpg'
    },
    {
      id: 'endo-crown',
      title: 'اندو کراون',
      description: 'روکش‌های یکپارچه برای دندان‌های عصب‌کشی شده',
      features: ['محافظت کامل', 'استحکام بالا', 'زیبایی', 'کارکرد عالی'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۲۵ میکرون',
      link: '/services/endo-crown',
      backgroundImage: 'assets/images/services/endo-crown.jpg'
    },
    {
      id: 'pmma-temporary',
      title: 'کراون موقت PMMA',
      description: 'روکش‌های موقت با کیفیت بالا برای دوره درمان',
      features: ['تحویل فوری', 'سازگاری بالا', 'ظاهر طبیعی', 'قیمت مناسب'],
      deliveryTime: '۲۴ ساعت',
      accuracy: '±۵۰ میکرون',
      link: '/services/pmma-temporary',
      backgroundImage: 'assets/images/services/pmma-temporary.jpg'
    },
    {
      id: 'waxup-design',
      title: 'وکس آپ و طراحی لبخند',
      description: 'طراحی دیجیتال لبخند و ساخت ماکت وکس آپ',
      features: ['طراحی دیجیتال', 'دقت بالا', 'پیش‌نمایش نتیجه', 'رضایت بیمار'],
      deliveryTime: '۲۴ ساعت',
      accuracy: '±۳۰ میکرون',
      link: '/services/waxup-design',
      backgroundImage: 'assets/images/services/waxup-design.jpg'
    },
    {
      id: 'night-guard',
      title: 'نایت گارد (نرم)',
      description: 'محافظ شبانه نرم برای دندان‌قروچه',
      features: ['نرم و راحت', 'ضد حساسیت', 'دوام بالا', 'قابل شستشو'],
      deliveryTime: '۴۸ ساعت',
      accuracy: '±۱۰۰ میکرون',
      link: '/services/night-guard',
      backgroundImage: 'assets/images/services/night-guard.jpg'
    },
    {
      id: 'bleaching-tray',
      title: 'بیلیچینگ تری',
      description: 'تری مخصوص بلیچینگ خانگی با فیت دقیق',
      features: ['فیت دقیق', 'موثر', 'راحت', 'قابل استفاده مجدد'],
      deliveryTime: '۲۴ ساعت',
      accuracy: '±۱۰۰ میکرون',
      link: '/services/bleaching-tray',
      backgroundImage: 'assets/images/services/bleaching-tray.jpg'
    }
  ];

  blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'تکنولوژی CAD/CAM در دندان‌سازی دیجیتال',
      excerpt: 'آشنایی با آخرین تکنولوژی‌های CAD/CAM و تاثیر آن بر کیفیت پروتزهای دندانی',
      image: 'assets/images/blog/cad-cam-article.jpg',
      date: '۱۴۰۲/۱۰/۱۵',
      readTime: '۵ دقیقه',
      link: '/blog/cad-cam-technology'
    },
    {
      id: '2',
      title: 'مقایسه زیرکونیا و ایمکس',
      excerpt: 'بررسی مزایا و معایب روکش‌های زیرکونیا و IPS Emax برای موارد مختلف',
      image: 'assets/images/blog/zirconia-emax-comparison.jpg',
      date: '۱۴۰۲/۱۰/۱۰',
      readTime: '۷ دقیقه',
      link: '/blog/zirconia-vs-emax'
    },
    {
      id: '3',
      title: 'نکات کلیدی در اسکن دیجیتال',
      excerpt: 'راهنمای کامل اسکن دیجیتال برای دستیابی به بهترین نتایج',
      image: 'assets/images/blog/digital-scanning-guide.jpg',
      date: '۱۴۰۲/۱۰/۰۵',
      readTime: '۴ دقیقه',
      link: '/blog/digital-scanning-tips'
    },
    {
      id: '4',
      title: 'مراقبت از پروتزهای دندانی',
      excerpt: 'راهنمای کامل مراقبت و نگهداری از پروتزهای ثابت و متحرک',
      image: 'assets/images/blog/prosthetic-care.jpg',
      date: '۱۴۰۲/۱۰/۰۱',
      readTime: '۶ دقیقه',
      link: '/blog/prosthetic-care'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkViewport();
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    this.setupVideo();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth < 768;
  }

  private setupVideo() {
    if (this.techVideo && this.techVideo.nativeElement) {
      const video = this.techVideo.nativeElement;
      video.muted = true;
      video.playsInline = true;
      
      video.addEventListener('loadeddata', () => {
        this.playVideo();
      });
    }
  }

  playVideo() {
    if (this.techVideo && this.techVideo.nativeElement) {
      const video = this.techVideo.nativeElement;
      video.play().then(() => {
        this.isVideoPlaying = true;
      }).catch(() => {
        this.isVideoPlaying = false;
      });
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.heroSlides.length) % this.heroSlides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideDelay);
  }

  resetAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startAutoSlide();
    }
  }

  navigateToService(link: string) {
    this.router.navigate([link]);
  }

  navigateToBlog(link: string) {
    this.router.navigate([link]);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  openUploadForm() {
    this.router.navigate(['/upload']);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}