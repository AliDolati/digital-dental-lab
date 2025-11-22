import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  indications: string[];
  duration: string;
  warranty: string;
  image: string;
  brands: string[];
  selectedBrand: string;
  category: string;
}

@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.scss'
})
export class ServiceCategoryComponent implements OnInit {

  categoryData: { [key: string]: any } = {
    'crown-bridge': {
      title: 'Crown & Bridge',
      description: 'روکش و بریج‌های دائمی با کیفیت بالا و زیبایی طبیعی',
      image: '/assets/images/services/zirconia-crown.jpg',
      services: [
        {
          id: 1,
          title: 'روکش زیرکونیا (Zirconia Crown)',
          description: 'روکش تمام زیرکونیا با استحکام فوق‌العاده و زیبایی طبیعی برای دندان‌های خلفی',
          features: ['استحکام ۱۴۰۰-۱۲۰۰ مگاپاسکال', 'شفافیت بالا', 'سازگاری کامل با بافت لثه', 'مقاومت در برابر شکست'],
          indications: ['دندان‌های خلفی', 'بریج‌های کوتاه', 'بازسازی کامل تاج'],
          duration: '۲-۳ روز کاری',
          warranty: '۱۰ سال',
          image: '/assets/images/services/zirconia-crown.jpg',
          brands: ['Katana', 'Lava Plus', 'BruxZir', 'Prettau'],
          selectedBrand: 'Katana',
          category: 'crown-bridge'
        },
        {
          id: 2,
          title: 'روکش IPS e.max',
          description: 'روکش سرامیکی با شفافیت استثنایی برای دندان‌های قدامی',
          features: ['شفافیت بسیار بالا', 'استحکام ۴۰۰ مگاپاسکال', 'تطابق رنگ کامل', 'زیبایی بی‌نظیر'],
          indications: ['دندان‌های جلو', 'لمینیت', 'ونیر', 'اینله و انله'],
          duration: '۳-۴ روز کاری',
          warranty: '۸ سال',
          image: '/assets/images/services/emax-crown.jpg',
          brands: ['IPS e.max CAD', 'IPS e.max Press'],
          selectedBrand: 'IPS e.max CAD',
          category: 'crown-bridge'
        },
        {
          id: 3,
          title: 'روکش اندو (Endo Crown)',
          description: 'روکش مخصوص دندان‌های درمان ریشه شده با پوشش کامل سطح اکلوزال',
          features: ['پوشش کامل اکلوزال', 'حفظ ساختار دندان', 'اتصال مستحکم به پست'],
          indications: ['دندان‌های درمان ریشه', 'تاج‌های کوتاه', 'حفره‌های وسیع'],
          duration: '۳-۴ روز کاری',
          warranty: '۷ سال',
          image: '/assets/images/services/endo-crown.jpg',
          brands: ['IPS e.max', 'Zirconia', 'Hybrid'],
          selectedBrand: 'IPS e.max',
          category: 'crown-bridge'
        },
        {
          id: 4,
          title: 'پست و کور زیرکونیا (Zirconia Post & Core)',
          description: 'پست و کور یکپارچه زیرکونیا برای بازسازی دندان‌های درمان ریشه',
          features: ['یکپارچگی ساختاری', 'شفافیت نور', 'سازگاری بافتی', 'مقاومت بالا'],
          indications: ['دندان‌های قدامی درمان ریشه', 'تاج‌های با دیواره نازک', 'بازسازی هسته'],
          duration: '۲-۳ روز کاری',
          warranty: '۸ سال',
          image: '/assets/images/services/zirconia-post.jpg',
          brands: ['CosmoPost', 'ZirconiaPost', 'Anatomical'],
          selectedBrand: 'CosmoPost',
          category: 'crown-bridge'
        }
      ]
    },
    'veneers': {
      title: 'Veneers',
      description: 'ونیرهای سرامیکی برای ایجاد لبخندی زیبا و طبیعی',
      image: '/assets/images/services/ceramic-veneer.jpg',
      services: [
        {
          id: 5,
          title: 'ونیر سرامیکی (Ceramic Veneer)',
          description: 'پوسته‌های نازک سرامیکی برای اصلاح فرم و رنگ دندان‌های قدامی',
          features: ['ضخامت ۰.۳-۰.۵ میلی‌متر', 'مقاومت در برابر لک', 'تطابق رنگ کامل', 'حداقل تراش دندان'],
          indications: ['اصلاح رنگ دندان', 'بستن فاصله دندانی', 'اصلاح فرم دندان', 'ترمیم لب پریدگی'],
          duration: '۵-۷ روز کاری',
          warranty: '۱۰ سال',
          image: '/assets/images/services/ceramic-veneer.jpg',
          brands: ['IPS e.max', 'Feldspathic', 'Empress'],
          selectedBrand: 'IPS e.max',
          category: 'veneers'
        }
      ]
    },
    'occlusal-appliances': {
      title: 'Occlusal Appliances',
      description: 'دستگاه‌های محافظتی برای دندان قروچه و سایش دندانی',
      image: '/assets/images/services/night-guard.jpg',
      services: [
        {
          id: 6,
          title: 'نایت گارد (Night Guard)',
          description: 'محافظ شبانه نرم برای جلوگیری از سایش دندان‌ها در اثر دندان قروچه',
          features: ['جنس نرم و راحت', 'ضد حساسیت', 'قابل شستشو', 'فیت دقیق'],
          indications: ['دندان قروچه', 'سایش دندانی', 'دردهای مفصل فکی', 'محافظت از ایمپلنت'],
          duration: '۲ روز کاری',
          warranty: '۲ سال',
          image: '/assets/images/services/night-guard.jpg',
          brands: ['Dental Duty', 'SleepRight', 'Proteeth', 'Sova'],
          selectedBrand: 'Dental Duty',
          category: 'occlusal-appliances'
        }
      ]
    },
    'digital-dentistry': {
      title: 'Digital Dentistry',
      description: 'خدمات دندانپزشکی دیجیتال و طراحی لبخند',
      image: '/assets/images/services/waxup-design.jpg',
      services: [
        {
          id: 7,
          title: 'طراحی موم و طراحی لبخند (Wax-Up & Smile Design)',
          description: 'طراحی سه‌بعدی لبخند و ساخت نمونه مومی برای پیش‌بینی نتیجه نهایی',
          features: ['طراحی دیجیتال', 'پیش‌بینی نتیجه', 'مشاوره تخصصی', 'نمونه مومی'],
          indications: ['برنامه‌ریزی درمان زیبایی', 'مشاوره قبل از درمان', 'شبیه‌سازی نتیجه'],
          duration: '۲-۳ روز کاری',
          warranty: '-',
          image: '/assets/images/services/waxup-design.jpg',
          brands: ['3Shape', 'Exocad', 'DentalCAD'],
          selectedBrand: '3Shape',
          category: 'digital-dentistry'
        }
      ]
    },
    'implant-solutions': {
      title: 'Implant Solutions',
      description: 'راه‌حل‌های کامل ایمپلنت دندان با زیبایی طبیعی',
      image: '/assets/images/services/implant-prosthetic.jpg',
      services: [
        {
          id: 8,
          title: 'روکش ایمپلنت زیرکونیا (Zirconia Implant Crown)',
          description: 'روکش مخصوص ایمپلنت با اتصال دقیق و زیبایی مطلوب',
          features: ['اتصال دقیق', 'پسیو فیت کامل', 'زیبایی طبیعی', 'سازگاری با بافت لثه'],
          indications: ['تک ایمپلنت', 'بریج ایمپلنت', 'پروتزهای فول موس', 'ایمپلنت‌های قدامی'],
          duration: '۴-۵ روز کاری',
          warranty: '۱۲ سال',
          image: '/assets/images/services/implant-prosthetic.jpg',
          brands: ['NobelProcera', 'Straumann', 'Zimmer'],
          selectedBrand: 'NobelProcera',
          category: 'implant-solutions'
        }
      ]
    },
    'provisionals': {
      title: 'Provisionals',
      description: 'روکش‌های موقت با کیفیت بالا برای دوره درمان',
      image: '/assets/images/services/pmma-temporary.jpg',
      services: [
        {
          id: 9,
          title: 'روکش موقت PMMA',
          description: 'روکش‌های موقت با کیفیت بالا برای محافظت از دندان در دوره درمان',
          features: ['سریع‌الاجرا', 'زیبایی قابل قبول', 'محافظت از دندان', 'قیمت مناسب'],
          indications: ['دوره درمان موقت', 'آزمایش طرح درمان', 'محافظت از دندان تراش خورده'],
          duration: '۱ روز کاری',
          warranty: '۶ ماه',
          image: '/assets/images/services/pmma-temporary.jpg',
          brands: ['Telio', 'Protemp', 'Luxatemp'],
          selectedBrand: 'Telio',
          category: 'provisionals'
        }
      ]
    },
    'thermoforming': {
      title: 'In-Office Thermoforming',
      description: 'خدمات ترموفرمینگ در مطب برای قالب‌های سفارشی',
      image: '/assets/images/services/bleaching-tray.jpg',
      services: [
        {
          id: 10,
          title: 'تری بلیچینگ (Bleaching Tray)',
          description: 'قالب مخصوص بلیچینگ خانگی برای سفید کردن دندان‌ها',
          features: ['طراحی شخصی‌سازی شده', 'فیت دقیق', 'مواد سازگار', 'کارایی بالا'],
          indications: ['سفید کردن دندان', 'درمان بلیچینگ', 'حفظ نتیجه بلیچینگ'],
          duration: '۱ روز کاری',
          warranty: '۱ سال',
          image: '/assets/images/services/bleaching-tray.jpg',
          brands: ['Opalescence', 'Pola', 'Zoom'],
          selectedBrand: 'Opalescence',
          category: 'thermoforming'
        }
      ]
    }
  };

  currentCategory: any = null;
  categorySlug: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categorySlug = params.get('category') || '';
      this.currentCategory = this.categoryData[this.categorySlug];
      
      if (!this.currentCategory) {
        console.warn(`دسته‌بندی ${this.categorySlug} یافت نشد`);
        this.router.navigate(['/services']);
        return;
      }

      console.log('دسته‌بندی بارگذاری شد:', this.currentCategory);
    });
  }

  navigateToService(serviceId: number) {
    this.router.navigate(['/services', this.categorySlug, serviceId]);
  }

  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/assets/images/placeholder.jpg';
  }
}