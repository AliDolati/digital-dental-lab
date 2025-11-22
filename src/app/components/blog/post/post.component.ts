import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  post: any = null;
  relatedPosts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.loadPost(slug);
    });
  }

  loadPost(slug: string | null) {
    const allPosts = this.getAllPosts();
    this.post = allPosts.find(p => p.slug === slug);
    
    if (!this.post) {
      this.router.navigate(['/blog']);
      return;
    }

    this.loadRelatedPosts();
  }

  getAllPosts() {
    return [
      {
        id: 1,
        title: 'روکش زیرکونیا: انقلابی در دندانپزشکی مدرن',
        excerpt: 'بررسی مزایا، معایب و کاربردهای روکش زیرکونیا در دندانپزشکی دیجیتال.',
        content: `
          <h2>مقدمه</h2>
          <p>روکش زیرکونیا یکی از پیشرفته‌ترین تکنولوژی‌ها در زمینه دندانپزشکی مدرن است که تحول بزرگی در صنعت دندانپزشکی ایجاد کرده است. این ماده با دارا بودن خواص منحصر به فرد، جایگزین مناسبی برای روکش‌های سنتی شده است.</p>
          
          <h2>مزایای روکش زیرکونیا</h2>
          <ul>
            <li><strong>استحکام فوق‌العاده:</strong> زیرکونیا دارای استحکام فشاری بالایی است که آن را برای دندان‌های عقب ایده‌آل می‌کند.</li>
            <li><strong>بیوکامپتیبیلیتی:</strong> سازگاری عالی با بافت‌های دهانی و عدم ایجاد حساسیت.</li>
            <li><strong>شفافیت طبیعی:</strong> با تکنولوژی‌های جدید، زیرکونیا ظاهری کاملاً طبیعی پیدا کرده است.</li>
            <li><strong>دوام بالا:</strong> مقاومت عالی در برابر سایش و شکستگی.</li>
          </ul>

          <h2>کاربردهای روکش زیرکونیا</h2>
          <p>روکش زیرکونیا در موارد زیر کاربرد دارد:</p>
          <ol>
            <li>بازسازی دندان‌های آسیاب</li>
            <li>ایمپلنت‌های دندانی</li>
            <li>پل‌های دندانی</li>
            <li>روکش‌های کامل و جزئی</li>
          </ol>

          <h2>فرآیند ساخت</h2>
          <p>روکش زیرکونیا با استفاده از تکنولوژی CAD/CAM ساخته می‌شود که شامل مراحل زیر است:</p>
          <ol>
            <li>اسکن دیجیتال دندان</li>
            <li>طراحی سه بعدی در کامپیوتر</li>
            <li>فرز کردن بلوک زیرکونیا</li>
            <li>پخت در کوره مخصوص</li>
            <li>رنگ‌آمیزی و لعاب‌کاری</li>
          </ol>

          <h2>نتیجه‌گیری</h2>
          <p>روکش زیرکونیا با ترکیب استحکام، زیبایی و سازگاری بیولوژیکی، انتخاب ایده‌آلی برای بیماران محسوب می‌شود. پیشرفت‌های اخیر در تکنولوژی ساخت، این ماده را به گزینه‌ای محبوب در دندانپزشکی مدرن تبدیل کرده است.</p>
        `,
        image: 'assets/images/blog/zirconia-crown.jpg',
        category: 'تکنولوژی',
        date: '۱۴۰۲/۱۰/۱۵',
        readTime: '۵ دقیقه',
        author: 'دکتر محمدی',
        slug: 'zirconia-crown-revolution',
        tags: ['زیرکونیا', 'روکش', 'CAD/CAM', 'دندانپزشکی دیجیتال']
      },
      {
        id: 2,
        title: 'لمینیت سرامیکی vs کامپوزیت ونیر',
        excerpt: 'مقایسه کامل لمینیت سرامیکی و کامپوزیت ونیر از نظر ماندگاری، زیبایی و هزینه.',
        content: `
          <h2>مقایسه لمینیت سرامیکی و کامپوزیت ونیر</h2>
          <p>انتخاب بین لمینیت سرامیکی و کامپوزیت ونیر یکی از تصمیم‌های مهم در دندانپزشکی زیبایی است.</p>
          
          <h3>لمینیت سرامیکی</h3>
          <ul>
            <li>ماندگاری ۱۰-۱۵ سال</li>
            <li>مقاومت در برابر لک</li>
            <li>شفافیت طبیعی</li>
            <li>هزینه بالاتر</li>
          </ul>

          <h3>کامپوزیت ونیر</h3>
          <ul>
            <li>ماندگاری ۵-۷ سال</li>
            <li>قابلیت ترمیم</li>
            <li>هزینه مقرون به صرفه</li>
            <li>نیاز به نگهداری بیشتر</li>
          </ul>
        `,
        image: 'assets/images/blog/veneer-comparison.jpg',
        category: 'مقایسه',
        date: '۱۴۰۲/۱۰/۱۲',
        readTime: '۷ دقیقه',
        author: 'دکتر رضایی',
        slug: 'veneer-vs-composite-comparison',
        tags: ['لمینیت', 'کامپوزیت', 'ونیر', 'زیبایی']
      }
    ];
  }

  loadRelatedPosts() {
    if (!this.post) return;
    
    const allPosts = this.getAllPosts();
    this.relatedPosts = allPosts
      .filter(p => p.id !== this.post.id && p.category === this.post.category)
      .slice(0, 3);
  }

  getPostUrl(slug: string): string {
    return `/blog/${slug}`;
  }

  shareOnSocialMedia(platform: string) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.post.title);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
  }
}