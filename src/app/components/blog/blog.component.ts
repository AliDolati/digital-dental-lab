import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  
  currentFilter = 'all';
  displayedPosts = 6;
  postsPerLoad = 6;

  // مقالات ویژه
  featuredPosts = [
    {
      id: 1,
      title: 'تکنولوژی CAD/CAM در دندانپزشکی دیجیتال - راهنمای کامل',
      excerpt: 'هر آنچه باید درباره طراحی و ساخت دیجیتال پروتزهای دندانی بدانید. از اسکن تا ساخت نهایی...',
      category: 'تکنولوژی',
      date: '۲ آبان ۱۴۰۳',
      readTime: '۸ دقیقه',
      author: 'دکتر محمدی',
      authorRole: 'متخصص پروتزهای دندانی',
      featured: true,
      icon: '💻'
    },
    {
      id: 2,
      title: 'مراقبت‌های بعد از لمینیت سرامیکی',
      excerpt: 'نکات طلایی برای نگهداری و افزایش عمر لمینیت‌های سرامیکی...',
      category: 'آموزشی',
      date: '۲۸ مهر ۱۴۰۳',
      readTime: '۵ دقیقه',
      author: 'دکتر رضایی',
      authorRole: 'متخصص زیبایی',
      featured: true,
      icon: '🌟'
    },
    {
      id: 3,
      title: 'جدیدترین مواد دندانپزشکی در سال ۲۰۲۴',
      excerpt: 'معرفی مواد جدید و پیشرفته در صنعت دندانپزشکی...',
      category: 'اخبار',
      date: '۲۵ مهر ۱۴۰۳',
      readTime: '۶ دقیقه',
      author: 'دکتر کریمی',
      authorRole: 'محقق مواد دندانی',
      featured: true,
      icon: '🔬'
    }
  ];

  // همه مقالات
  allPosts = [
    {
      id: 4,
      title: 'تفاوت ایمپلنت و بریج دندان - کدام بهتر است؟',
      excerpt: 'مقایسه کامل ایمپلنت و بریج دندان از نظر هزینه، عمر مفید و نتایج...',
      category: 'آموزشی',
      date: '۲۰ مهر ۱۴۰۳',
      readTime: '۷ دقیقه',
      author: 'دکتر احمدی',
      tags: ['ایمپلنت', 'بریج', 'مقایسه'],
      featured: false,
      icon: '🔩'
    },
    {
      id: 5,
      title: '۱۰ نکته برای انتخاب بهترین لابراتوار دندانپزشکی',
      excerpt: 'معیارهای مهم در انتخاب لابراتوار معتبر و حرفه‌ای...',
      category: 'نکات کاربردی',
      date: '۱۸ مهر ۱۴۰۳',
      readTime: '۵ دقیقه',
      author: 'دکتر حسینی',
      tags: ['انتخاب', 'کیفیت', 'تخصص'],
      featured: true,
      icon: '✅'
    },
    {
      id: 6,
      title: 'چاپ سه بعدی در دندانپزشکی - انقلابی در ساخت پروتز',
      excerpt: 'کاربردهای چاپ سه بعدی و مزایای آن در دندانپزشکی مدرن...',
      category: 'تکنولوژی',
      date: '۱۵ مهر ۱۴۰۳',
      readTime: '۹ دقیقه',
      author: 'دکتر محمدی',
      tags: ['چاپ سه بعدی', 'تکنولوژی', 'پروتز'],
      featured: false,
      icon: '🖨️'
    },
    {
      id: 7,
      title: 'روکش زیرکونیوم vs روکش PFM - مقایسه فنی',
      excerpt: 'مقایسه تخصصی روکش زیرکونیوم و روکش PFM از نظر استحکام و زیبایی...',
      category: 'تکنولوژی',
      date: '۱۲ مهر ۱۴۰۳',
      readTime: '۸ دقیقه',
      author: 'دکتر رضایی',
      tags: ['زیرکونیوم', 'PFM', 'مقایسه'],
      featured: false,
      icon: '🦷'
    },
    {
      id: 8,
      title: 'اصول نگهداری از پروتز متحرک',
      excerpt: 'راهنمای کامل تمیز کردن و نگهداری از پروتزهای متحرک...',
      category: 'آموزشی',
      date: '۱۰ مهر ۱۴۰۳',
      readTime: '۴ دقیقه',
      author: 'دکتر کریمی',
      tags: ['پروتز متحرک', 'نگهداری', 'تمیز کردن'],
      featured: false,
      icon: '🦿'
    },
    {
      id: 9,
      title: 'تاثیر رنگ‌شناسی در طراحی لبخند (Smile Design)',
      excerpt: 'نقش رنگ و سایه‌ها در طراحی لبخند طبیعی و جذاب...',
      category: 'زیبایی',
      date: '۸ مهر ۱۴۰۳',
      readTime: '۶ دقیقه',
      author: 'دکتر احمدی',
      tags: ['لبخند', 'رنگ', 'زیبایی'],
      featured: true,
      icon: '😊'
    },
    // مقالات بیشتر...
    ...Array.from({length: 10}, (_, i) => ({
      id: i + 10,
      title: `مقاله نمونه ${i + 10} - موضوع تخصصی دندانپزشکی`,
      excerpt: 'این یک مقاله نمونه با محتوای آموزشی و تخصصی در حوزه دندانپزشکی است...',
      category: ['تکنولوژی', 'آموزشی', 'اخبار', 'نکات کاربردی'][i % 4],
      date: `${i + 1} مهر ۱۴۰۳`,
      readTime: `${5 + (i % 4)} دقیقه`,
      author: ['دکتر محمدی', 'دکتر رضایی', 'دکتر کریمی', 'دکتر احمدی'][i % 4],
      tags: ['نمونه', 'آموزش', 'تخصصی'],
      featured: i % 5 === 0,
      icon: ['💡', '📚', '🔍', '🎯'][i % 4]
    }))
  ];

  // دسته‌بندی‌ها
  categories = [
    { name: 'تکنولوژی', count: 25 },
    { name: 'آموزشی', count: 32 },
    { name: 'اخبار', count: 18 },
    { name: 'نکات کاربردی', count: 15 },
    { name: 'زیبایی', count: 12 },
    { name: 'مواد دندانی', count: 8 }
  ];

  // مقالات پربازدید
  popularPosts = [
    {
      title: 'لمینیت سرامیکی - هر آنچه باید بدانید',
      date: '۵ مهر ۱۴۰۳',
      views: '۲.۴K'
    },
    {
      title: 'ایمپلنت فوری - مزایا و معایب',
      date: '۲۸ شهریور ۱۴۰۳',
      views: '۱.۸K'
    },
    {
      title: 'بلیچینگ دندان - روش‌های مدرن',
      date: '۲۰ شهریور ۱۴۰۳',
      views: '۱.۵K'
    },
    {
      title: 'پروتز متحرک دیجیتال - تحولی جدید',
      date: '۱۵ شهریور ۱۴۰۳',
      views: '۱.۲K'
    }
  ];

  ngOnInit() {
    // مقداردهی اولیه
  }

  get filteredPosts() {
    let posts = this.allPosts;
    
    if (this.currentFilter !== 'all') {
      posts = posts.filter(post => 
        post.category === this.currentFilter
      );
    }
    
    return posts.slice(0, this.displayedPosts);
  }

  get hasMorePosts() {
    let totalPosts = this.allPosts.length;
    
    if (this.currentFilter !== 'all') {
      totalPosts = this.allPosts.filter(post => 
        post.category === this.currentFilter
      ).length;
    }
    
    return this.displayedPosts < totalPosts;
  }

  filterPosts(category: string) {
    this.currentFilter = category;
    this.displayedPosts = this.postsPerLoad;
  }

  loadMorePosts() {
    this.displayedPosts += this.postsPerLoad;
  }

  readPost(postId: number) {
    // در حالت واقعی به صفحه مقاله هدایت می‌شود
    console.log('Reading post:', postId);
    alert(`مقاله ${postId} به زودی بارگذاری خواهد شد!`);
  }

  navigateToContact() {
    window.location.href = '/contact';
  }
}