import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit {

  technologies = [
    {
      id: 1,
      title: 'اسکنرهای دیجیتال سه‌بعدی',
      description: 'دقیق‌ترین تکنولوژی اسکن داخل دهانی با دقت ۵ میکرون',
      features: [
        'اسکن فول آرک در کمتر از ۲ دقیقه',
        'قابلیت اسکن رنگ برای تطابق کامل با دندان طبیعی',
        'خروجی STL با بالاترین کیفیت',
        'سازگاری با تمام سیستم‌های CAD/CAM'
      ],
      specifications: {
        accuracy: '5 میکرون',
        scanTime: '2 دقیقه',
        resolution: '20 مگاپیکسل'
      },
      active: false
    },
    {
      id: 2,
      title: 'سیستم CAD/CAM پیشرفته',
      description: 'طراحی و ساخت دیجیتال با نرم‌افزارهای تخصصی دندانپزشکی',
      features: [
        'طراحی بیومکانیکال دندان',
        'شبیه‌سازی اکلوژن دینامیک',
        'آنالیز استرس و فشار',
        'کتابخانه دیجیتال دندان‌های طبیعی'
      ],
      specifications: {
        software: '3Shape, Exocad',
        designTime: '15-30 دقیقه',
        compatibility: 'تمام مواد دندانی'
      },
      active: false
    },
    {
      id: 3,
      title: 'فرزینگ CNC 5 محوره',
      description: 'دستگاه‌های فرز با دقت ۱۰ میکرون برای ساخت پروتزهای دندانی',
      features: [
        'فرز همزمان ۵ محوره',
        'قابلیت کار با زیرکونیا و تیتانیوم',
        'سیستم خنک‌کننده پیشرفته',
        'کنترل کیفیت آنلاین'
      ],
      specifications: {
        accuracy: '10 میکرون',
        materials: 'زیرکونیا، تیتانیوم، کبالت-کروم',
        axis: '5 محوره'
      },
      active: false
    },
    {
      id: 4,
      title: 'پرینتر سه‌بعدی DLP/LCD',
      description: 'پرینت رزینی با رزولوشن ۴K برای مدل‌های جراحی و پروتز',
      features: [
        'رزولوشن ۳۸۵۰ × ۲۴۰۰ پیکسل',
        'پرینت همزمان ۲۰ مدل',
        'مواد بیوکامپتیبل',
        'پس‌پردازش خودکار'
      ],
      specifications: {
        technology: 'DLP/LCD',
        resolution: '4K',
        layerHeight: '25-100 میکرون'
      },
      active: false
    },
    {
      id: 5,
      title: 'کوره‌های پیشرفته زیرکونیا',
      description: 'سیستم‌های سینترینگ تمام اتوماتیک با کنترل دمای دقیق',
      features: [
        'کنترل دمای تا ۱۶۰۰ درجه سانتیگراد',
        'برنامه‌ریزی هوشمند سینترینگ',
        'خنک‌کنندگی کنترل شده',
        'مانیتورینگ آنلاین فرآیند'
      ],
      specifications: {
        maxTemp: '1600°C',
        process: 'اتوماتیک',
        capacity: '40 واحد'
      },
      active: false
    },
    {
      id: 6,
      title: 'سیستم رنگ‌سازی دیجیتال',
      description: 'تکنولوژی تطابق رنگ با دقت بالا برای دندان‌های طبیعی',
      features: [
        'اسکنر رنگ VITA',
        'دیتابیس ۲۰۰۰ رنگ دندان',
        'سیستم میکس خودکار رنگ',
        'گارانتی تطابق رنگ'
      ],
      specifications: {
        colorSystem: 'VITA 3D-Master',
        accuracy: 'ΔE < 1.5',
        shades: '2000+'
      },
      active: false
    }
  ];

  materials = [
    {
      name: 'زیرکونیا Monolithic',
      strength: '1200-1400 MPa',
      transparency: 'High',
      indication: 'روکش‌های تمام زیبایی، بریج‌های ۴ واحدی'
    },
    {
      name: 'زیرکونیا High-Translucent',
      strength: '850-1100 MPa',
      transparency: 'Very High',
      indication: 'لمینیت، ونیر، اینله و انله'
    },
    {
      name: 'تیتانیوم گرید ۵',
      strength: '900-1100 MPa',
      transparency: 'Opaque',
      indication: 'ایمپلنت، پروتزهای متحرک، بارهای ایمپلنت'
    },
    {
      name: 'کبالت-کروم',
      strength: '800-1000 MPa',
      transparency: 'Opaque',
      indication: 'پروتزهای متحرک پارسیل، فریم‌های بریج'
    },
    {
      name: 'رزین کامپوزیت هارد',
      strength: '300-400 MPa',
      transparency: 'Medium-High',
      indication: 'تمپورری، پروویژنال، اینله/انله مستقیم'
    },
    {
      name: 'PMMA بلوک',
      strength: '80-120 MPa',
      transparency: 'High',
      indication: 'تمپورری، پروویژنال، سدنوش'
    }
  ];

  workflow = [
    {
      step: 1,
      title: 'اسکن دیجیتال',
      description: 'تهیه ایمپرشن دیجیتال با اسکنر داخل دهانی',
      time: '5-10 دقیقه',
      accuracy: '99.8%'
    },
    {
      step: 2,
      title: 'طراحی CAD',
      description: 'طراحی سه‌بعدی پروتز با نرم‌افزار تخصصی',
      time: '15-45 دقیقه',
      accuracy: '100% دیجیتال'
    },
    {
      step: 3,
      title: 'ساخت CAM',
      description: 'تولید پروتز با دستگاه فرز یا پرینتر سه‌بعدی',
      time: '20-90 دقیقه',
      accuracy: '25-50 میکرون'
    },
    {
      step: 4,
      title: 'پست‌پردازش',
      description: 'پولیش، رنگ‌سازی و کنترل کیفیت نهایی',
      time: '15-30 دقیقه',
      accuracy: 'کنترل ۱۰۰% کیفیت'
    }
  ];

  constructor() {}

  ngOnInit() {}

  toggleTechnology(id: number) {
    this.technologies = this.technologies.map(tech => {
      if (tech.id === id) {
        return { ...tech, active: !tech.active };
      }
      return { ...tech, active: false };
    });
  }
}