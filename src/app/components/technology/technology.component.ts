import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit {
  
  selectedTech: any = null;

  // تکنولوژی‌های اصلی
  technologies = [
    {
      id: 1,
      title: 'اسکنر دیجیتال داخل دهانی',
      description: 'اسکن سه بعدی دقیق از دندان‌ها بدون نیاز به قالب‌گیری سنتی',
      icon: '🔍',
      featured: true,
      specs: [
        { label: 'دقت اسکن', value: '۱۵ میکرون' },
        { label: 'سرعت اسکن', value: '۲ دقیقه' },
        { label: 'رزولوشن', value: 'HD' }
      ],
      features: [
        'اسکن بدون تماس فیزیکی',
        'کاملاً دیجیتال',
        'قابلیت ذخیره ابری',
        'نمایش بلادرنگ'
      ],
      fullDescription: 'سیستم اسکن داخل دهانی با دقت فوق‌العاده برای ثبت دیجیتال دقیق از ساختار دندان‌ها',
      applications: ['لمینیت', 'روکش', 'ایمپلنت', 'ارتودنسی'],
      images: ['scan1', 'scan2', 'scan3']
    },
    {
      id: 2,
      title: 'سیستم CAD/CAM',
      description: 'طراحی و ساخت کامپیوتری پروتزهای دندانی با دقت میکرونی',
      icon: '💻',
      featured: true,
      specs: [
        { label: 'دقت طراحی', value: '۲۰ میکرون' },
        { label: 'نرم‌افزار', value: 'exocad' },
        { label: 'پشتیبانی فرمت', value: 'STL, PLY' }
      ],
      features: [
        'طراحی سه بعدی پیشرفته',
        'کتابخانه دندان دیجیتال',
        'شبیه‌سازی عملکرد',
        'آنالیز اکلوزال'
      ],
      fullDescription: 'سیستم کامل CAD/CAM برای طراحی و ساخت دیجیتال پروتزهای دندانی',
      applications: ['روکش', 'بریج', 'ایمپلنت', 'پروتز متحرک'],
      images: ['cad1', 'cad2', 'cad3']
    },
    {
      id: 3,
      title: 'چاپگر سه بعدی دندانپزشکی',
      description: 'چاپ مدل‌ها و پروتزها با بالاترین دقت و کیفیت',
      icon: '🖨️',
      featured: false,
      specs: [
        { label: 'دقت چاپ', value: '۲۵ میکرون' },
        { label: 'سایز ساخت', value: '۱۴۵×۸۱×۱۵۰ mm' },
        { label: 'تکنولوژی', value: 'DLP' }
      ],
      features: [
        'چاپ با رزین مخصوص دندانپزشکی',
        'سرعت چاپ بالا',
        'پشتیبانی از مواد مختلف',
        'کنترل کیفیت خودکار'
      ],
      fullDescription: 'چاپگر سه بعدی پیشرفته برای ساخت مدل‌ها، گایدها و پروتزهای موقت',
      applications: ['مدل گچی', 'گاید جراحی', 'پروتز موقت', 'اسپلینت'],
      images: ['print1', 'print2', 'print3']
    },
    {
      id: 4,
      title: 'فرن زن دیجیتال',
      description: 'پخت سرامیک با کنترل دقیق دما و زمان',
      icon: '⚡',
      featured: false,
      specs: [
        { label: 'حداکثر دما', value: '۱۶۰۰°C' },
        { label: 'کنترل دما', value: '±۱°C' },
        { label: 'برنامه‌های از پیش تنظیم', value: '۵۰+' }
      ],
      features: [
        'کنترل دیجیتال دما',
        'برنامه‌ریزی هوشمند',
        'سیستم خنک‌کننده پیشرفته',
        'گزارش‌گیری دقیق'
      ],
      fullDescription: 'فرن زن دیجیتال با قابلیت برنامه‌ریزی دقیق برای پخت انواع سرامیک‌ها',
      applications: ['زیرکونیوم', 'لیوم', 'امکس', 'سرامیک‌های شیشه‌ای'],
      images: ['furnace1', 'furnace2', 'furnace3']
    },
    {
      id: 5,
      title: 'دستگاه فرزینگ CNC',
      description: 'ساخت پروتزهای زیرکونیومی با دقت فوق‌العاده',
      icon: '🔧',
      featured: true,
      specs: [
        { label: 'دقت فرز', value: '۱۰ میکرون' },
        { label: 'تعداد محور', value: '۵ محور' },
        { label: 'جنس قابل فرز', value: 'زیرکونیوم، PMMA' }
      ],
      features: [
        'فرز ۵ محوره همزمان',
        'سیستم خنک‌کننده داخلی',
        'تعویض خودکار ابزار',
        'کنترل ارتعاش'
      ],
      fullDescription: 'دستگاه فرز CNC پیشرفته برای ساخت پروتزهای زیرکونیومی با کیفیت عالی',
      applications: ['روکش زیرکونیوم', 'بریج زیرکونیوم', 'ایمپلنت', 'ابومنتم'],
      images: ['mill1', 'mill2', 'mill3']
    },
    {
      id: 6,
      title: 'سیستم رنگ و گلاز',
      description: 'رنگ‌آمیزی و براق‌سازی دیجیتال پروتزها',
      icon: '🎨',
      featured: false,
      specs: [
        { label: 'تعداد رنگ', value: '۲۰۰+ رنگ' },
        { label: 'دقت رنگ‌آمیزی', value: '۰.۱mm' },
        { label: 'سیستم', value: 'پنوماتیک' }
      ],
      features: [
        'کتابخانه رنگ دیجیتال',
        'شبیه‌سازی رنگ طبیعی',
        'کنترل فشار دقیق',
        'پاک‌شوندگی آسان'
      ],
      fullDescription: 'سیستم کامل رنگ و گلاز برای ایجاد ظاهر طبیعی و براق در پروتزها',
      applications: ['رنگ‌آمیزی زیرکونیوم', 'گلاز سرامیک', 'استین‌نگ', 'کاراکترایزیشن'],
      images: ['stain1', 'stain2', 'stain3']
    }
  ];

  // مراحل کاری
  workflowSteps = [
    {
      icon: '📋',
      title: 'دریافت اطلاعات',
      description: 'دریافت قالب دیجیتال یا فیزیکی از دندانپزشک',
      details: [
        'اسکن داخل دهانی',
        'قالب‌گیری سنتی',
        'عکس‌برداری',
        'مستندات پزشکی'
      ]
    },
    {
      icon: '💻',
      title: 'طراحی دیجیتال',
      description: 'طراحی سه بعدی پروتز با نرم‌افزارهای CAD',
      details: [
        'طراحی آناتومیک',
        'شبیه‌سازی عملکرد',
        'آنالیز اکلوزال',
        'تایید دندانپزشک'
      ]
    },
    {
      icon: '🖨️',
      title: 'ساخت دیجیتال',
      description: 'ساخت پروتز با دستگاه‌های CAM و چاپ سه بعدی',
      details: [
        'فرز CNC',
        'چاپ سه بعدی',
        'پخت سرامیک',
        'کنترل کیفیت'
      ]
    },
    {
      icon: '🎨',
      title: 'تکمیل و پرداخت',
      description: 'رنگ‌آمیزی، براق‌سازی و کنترل نهایی',
      details: [
        'رنگ‌آمیزی',
        'گلاز',
        'پولیش',
        'کنترل نهایی'
      ]
    },
    {
      icon: '📦',
      title: 'تحویل',
      description: 'بسته‌بندی و ارسال به مطب دندانپزشک',
      details: [
        'بسته‌بندی حرفه‌ای',
        'مستندات فنی',
        'گارانتی',
        'پشتیبانی'
      ]
    }
  ];

  // تجهیزات
  equipments = [
    {
      name: 'اسکنر داخل دهانی',
      model: '3Shape TRIOS 4',
      country: 'دانمارک',
      accuracy: '۱۵ میکرون',
      year: '۲۰۲۳',
      icon: '🔍'
    },
    {
      name: 'چاپگر سه بعدی',
      model: 'Formlabs Form 3B',
      country: 'آمریکا',
      accuracy: '۲۵ میکرون',
      year: '۲۰۲۳',
      icon: '🖨️'
    },
    {
      name: 'دستگاه فرز CNC',
      model: 'Roland DWX-52DC',
      country: 'ژاپن',
      accuracy: '۱۰ میکرون',
      year: '۲۰۲۲',
      icon: '🔧'
    },
    {
      name: 'فرن زن دیجیتال',
      model: 'Programat P710',
      country: 'آلمان',
      accuracy: '±۱°C',
      year: '۲۰۲۳',
      icon: '⚡'
    },
    {
      name: 'اسکنر آزمایشگاهی',
      model: '3Shape E4',
      country: 'دانمارک',
      accuracy: '۵ میکرون',
      year: '۲۰۲۲',
      icon: '📐'
    },
    {
      name: 'سیستم رنگ‌آمیزی',
      model: 'Ivoclar Ivomix',
      country: 'لیختن اشتاین',
      accuracy: '۰.۱mm',
      year: '۲۰۲۳',
      icon: '🎨'
    }
  ];

  // مواد اولیه
  materialCategories = [
    {
      title: 'زیرکونیوم',
      origin: 'آلمان',
      materials: [
        {
          name: 'زیرکونیوم پرشرلس',
          brand: 'Zirkonzahn',
          properties: ['استحکام بالا', 'شفافیت عالی', 'بیوکمپتیبل'],
          certified: true
        },
        {
          name: 'زیرکونیوم های ترانس',
          brand: 'Ivoclar',
          properties: ['شفافیت فوق‌العاده', 'استحکام ۱۲۰۰MPa', 'رنگ‌پذیری آسان'],
          certified: true
        }
      ]
    },
    {
      title: 'سرامیک‌های شیشه‌ای',
      origin: 'سوئیس',
      materials: [
        {
          name: 'لیوم پرس',
          brand: 'Ivoclar',
          properties: ['زیبایی طبیعی', 'مقاومت در برابر سایش', 'شفافیت بالا'],
          certified: true
        },
        {
          name: 'امکس کاد',
          brand: 'GC',
          properties: ['استحکام عالی', 'کاربرد آسان', 'طیف رنگ گسترده'],
          certified: true
        }
      ]
    },
    {
      title: 'رزین‌های چاپ سه بعدی',
      origin: 'آمریکا',
      materials: [
        {
          name: 'رزین مدل',
          brand: 'Formlabs',
          properties: ['دقت بالا', 'ثبات ابعادی', 'رنگ طبیعی'],
          certified: true
        },
        {
          name: 'رزین موقت',
          brand: 'NextDent',
          properties: ['مقاومت بالا', 'بیوکمپتیبل', 'قابلیت پولیش'],
          certified: false
        }
      ]
    }
  ];

  // داده‌های مقایسه
  comparisonData = [
    {
      icon: '⏱️',
      criteria: 'زمان ساخت',
      traditional: { value: '۳-۷ روز', description: 'قالب‌گیری و ساخت دستی', negative: true },
      digital: { value: '۲۴ ساعت', description: 'اسکن و ساخت دیجیتال', positive: true }
    },
    {
      icon: '🎯',
      criteria: 'دقت',
      traditional: { value: '۵۰-۱۰۰μm', description: 'خطای انسانی و مواد', negative: true },
      digital: { value: '۱۰-۲۰μm', description: 'کنترل کامپیوتری', positive: true }
    },
    {
      icon: '🔄',
      criteria: 'قابلیت تکرار',
      traditional: { value: 'متغیر', description: 'وابسته به مهارت اپراتور', negative: true },
      digital: { value: '۱۰۰٪', description: 'ثبات کامل در تولید', positive: true }
    },
    {
      icon: '💎',
      criteria: 'کیفیت مواد',
      traditional: { value: 'استاندارد', description: 'مواد معمولی', negative: true },
      digital: { value: 'درجه یک', description: 'مواد پیشرفته', positive: true }
    },
    {
      icon: '📊',
      criteria: 'پیش‌بینی نتیجه',
      traditional: { value: 'حدسی', description: 'قابلیت پیش‌بینی کم', negative: true },
      digital: { value: 'دقیق', description: 'شبیه‌سازی دیجیتال', positive: true }
    }
  ];

  ngOnInit() {
    // مقداردهی اولیه
  }

  showTechDetails(tech: any) {
    this.selectedTech = tech;
  }

  closeModal() {
    this.selectedTech = null;
  }

  requestDemo(tech: any) {
    alert(`درخواست دمو برای ${tech.title} ثبت شد!`);
  }

  scheduleTour() {
    alert('بازدید از لابراتوار رزرو شد! با شما تماس خواهیم گرفت.');
  }

  downloadBrochure() {
    alert('بروشور تکنولوژی‌ها به زودی قابل دانلود خواهد بود.');
  }

  contactExpert() {
    window.location.href = '/contact';
  }

  viewEquipment(equipment: any) {
    alert(`نمایش جزئیات ${equipment.name}`);
  }
}