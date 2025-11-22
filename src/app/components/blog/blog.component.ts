import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // مقالات منتخب - با استفاده از عکس‌های موجود
  featuredPosts = [
    {
      id: 1,
      title: 'روکش زیرکونیا: انقلابی در دندانپزشکی مدرن',
      excerpt: 'بررسی مزایا، معایب و کاربردهای روکش زیرکونیا در دندانپزشکی دیجیتال. چگونه این تکنولوژی تحول بزرگی در صنعت دندانپزشکی ایجاد کرده است.',
      image: 'assets/images/blog/zirconia-crown.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۱۰/۱۵',
      readTime: '۵ دقیقه',
      author: 'دکتر محمدی',
      slug: 'zirconia-crown-revolution'
    },
    {
      id: 2,
      title: 'لمینیت سرامیکی vs کامپوزیت ونیر',
      excerpt: 'مقایسه کامل لمینیت سرامیکی و کامپوزیت ونیر از نظر ماندگاری، زیبایی و هزینه. کدام گزینه برای لبخند شما مناسب‌تر است؟',
      image: 'assets/images/blog/veneer-comparison.jpg',
      category: 'مقایسه',
      date: '۱۴۰۲/۱۰/۱۲',
      readTime: '۷ دقیقه',
      author: 'دکتر رضایی',
      slug: 'veneer-vs-composite-comparison'
    }
  ];

  // مقالات اخیر
  recentPosts = [
    {
      id: 3,
      title: 'مراقبت از ایمپلنت دندان',
      excerpt: 'راهنمای کامل مراقبت و نگهداری از ایمپلنت دندان برای افزایش طول عمر. نکات طلایی برای حفظ سلامت ایمپلنت‌های دندانی.',
      image: 'assets/images/blog/implant-care.jpg',
      category: 'مراقبت',
      date: '۱۴۰۲/۱۰/۱۰',
      readTime: '۴ دقیقه',
      author: 'دکتر کریمی',
      slug: 'dental-implant-care'
    },
    {
      id: 4,
      title: 'CAD/CAM در دندانپزشکی دیجیتال',
      excerpt: 'نقش تکنولوژی CAD/CAM در تحول لابراتوارهای دندانپزشکی. چگونه این تکنولوژی دقت و سرعت کار را افزایش داده است.',
      image: 'assets/images/blog/cad-cam.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۱۰/۰۸',
      readTime: '۶ دقیقه',
      author: 'دکتر احمدی',
      slug: 'cad-cam-dentistry'
    },
    {
      id: 5,
      title: 'بلیچینگ خانگی vs مطبی',
      excerpt: 'مقایسه روش‌های مختلف بلیچینگ و انتخاب بهترین گزینه. مزایا و معایب هر روش را بشناسید.',
      image: 'assets/images/blog/teeth-whitening.jpg',
      category: 'زیبایی',
      date: '۱۴۰۲/۱۰/۰۵',
      readTime: '۵ دقیقه',
      author: 'دکتر حسینی',
      slug: 'teeth-bleaching-comparison'
    },
    {
      id: 6,
      title: 'پروتزهای متحرک جدید',
      excerpt: 'آخرین نوآوری‌ها در زمینه پروتزهای متحرک دندانپزشکی. تکنولوژی‌های جدید چه امکاناتی ارائه می‌دهند.',
      image: 'assets/images/blog/denture.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۱۰/۰۳',
      readTime: '۴ دقیقه',
      author: 'دکتر محمودی',
      slug: 'modern-dentures'
    },
    {
      id: 7,
      title: 'راهنمای انتخاب روکش دندان',
      excerpt: 'چگونه بهترین جنس روکش را با توجه به نیاز خود انتخاب کنیم. مقایسه زیرکونیا، Emax و روکش‌های فلزی.',
      image: 'assets/images/blog/crown-guide.jpg',
      category: 'آموزش',
      date: '۱۴۰۲/۱۰/۰۱',
      readTime: '۸ دقیقه',
      author: 'دکتر علیزاده',
      slug: 'dental-crown-selection-guide'
    },
    {
      id: 8,
      title: 'مزایای دندانپزشکی دیجیتال',
      excerpt: 'بررسی کامل مزایای دندانپزشکی دیجیتال نسبت به روش‌های سنتی. چرا دندانپزشکی دیجیتال آینده این صنعت است.',
      image: 'assets/images/blog/digital-dentistry.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۰۹/۲۸',
      readTime: '۶ دقیقه',
      author: 'دکتر جعفری',
      slug: 'digital-dentistry-benefits'
    },
    {
      id: 9,
      title: 'نایت گارد و اهمیت آن',
      excerpt: 'چرا استفاده از نایت گارد برای سلامت دندان‌ها ضروری است. محافظت از دندان‌ها در برابر سایش شبانه.',
      image: 'assets/images/blog/night-guard.jpg',
      category: 'مراقبت',
      date: '۱۴۰۲/۰۹/۲۵',
      readTime: '۳ دقیقه',
      author: 'دکتر موسوی',
      slug: 'night-guard-importance'
    },
    {
      id: 10,
      title: 'ایمپلنت دیجیتال',
      excerpt: 'فرآیند کاشت ایمپلنت با راهنمای دیجیتال و مزایای آن. دقت بالاتر و نتایج بهتر با تکنولوژی دیجیتال.',
      image: 'assets/images/blog/digital-implant.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۰۹/۲۲',
      readTime: '۷ دقیقه',
      author: 'دکتر کاظمی',
      slug: 'digital-implant-surgery'
    },
    {
      id: 11,
      title: 'لمینیت سرامیکی',
      excerpt: 'همه چیز درباره لمینیت سرامیکی و مراحل ساخت آن. چگونه لبخند هالیوودی خود را داشته باشید.',
      image: 'assets/images/blog/ceramic-veneer.jpg',
      category: 'زیبایی',
      date: '۱۴۰۲/۰۹/۲۰',
      readTime: '۵ دقیقه',
      author: 'دکتر رحیمی',
      slug: 'ceramic-veneers-guide'
    },
    {
      id: 12,
      title: 'پست و کور زیرکونیا',
      excerpt: 'کاربردهای پست و کور زیرکونیا در دندان‌های ترمیمی. استحکام و زیبایی در یک قالب.',
      image: 'assets/images/blog/zirconia-post.jpg',
      category: 'تکنولوژی',
      date: '۱۴۰۲/۰۹/۱۸',
      readTime: '۴ دقیقه',
      author: 'دکتر امینی',
      slug: 'zirconia-post-core'
    }
  ];

  // دسته‌بندی‌ها
  categories = [
    { name: 'تکنولوژی', count: 12 },
    { name: 'مراقبت', count: 8 },
    { name: 'زیبایی', count: 6 },
    { name: 'آموزش', count: 10 },
    { name: 'مقایسه', count: 5 }
  ];

  // تگ‌های محبوب
  popularTags = [
    'زیرکونیا', 'ایمپلنت', 'لمینیت', 'روکش', 'بلیچینگ', 
    'CAD/CAM', 'دندانپزشکی دیجیتال', 'نایت گارد', 'پروتز'
  ];

  selectedCategory = 'همه';
  searchTerm = '';

  ngOnInit() {
    this.preloadImages();
  }

  // پیش‌لود عکس‌ها برای عملکرد بهتر
  preloadImages() {
    const allPosts = [...this.featuredPosts, ...this.recentPosts];
    allPosts.forEach(post => {
      const img = new Image();
      img.src = post.image;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  get filteredPosts() {
    let posts = this.recentPosts;

    if (this.selectedCategory !== 'همه') {
      posts = posts.filter(post => post.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      );
    }

    return posts;
  }

  // مقالات برای بخش جدید (۳ تایی)
  get latestPosts() {
    return this.recentPosts.slice(0, 3);
  }

  // برای صفحات بعدی (pagination)
  currentPage = 1;
  itemsPerPage = 6;

  get paginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  clearFilters() {
    this.selectedCategory = 'همه';
    this.searchTerm = '';
    this.currentPage = 1;
  }

  // تابع برای گرفتن URL مقاله
  getPostUrl(slug: string): string {
    return `/blog/${slug}`;
  }
}