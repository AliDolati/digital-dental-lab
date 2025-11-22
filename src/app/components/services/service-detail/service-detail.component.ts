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
  detailedDescription?: string;
  technicalSpecs?: { [key: string]: string };
  beforeAfterImages?: string[];
  benefits?: string[];
  contraindications?: string[];
  maintenance?: string[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {

  serviceData: { [key: string]: { [key: number]: Service } } = {
    'crown-bridge': {
      1: {
        id: 1,
        title: 'روکش زیرکونیا (Zirconia Crown)',
        description: 'روکش تمام زیرکونیا با استحکام فوق‌العاده و زیبایی طبیعی',
        detailedDescription: 'روکش زیرکونیا با استفاده از پیشرفته‌ترین تکنولوژی CAD/CAM ساخته می‌شود. این روکش‌ها دارای استحکام بسیار بالا (۱۴۰۰-۱۲۰۰ مگاپاسکال) و در عین حال شفافیت مناسب برای شبیه‌سازی دندان طبیعی هستند. زیرکونیا به دلیل خواص مکانیکی عالی، برای دندان‌های خلفی و بریج‌های کوتاه ایده‌آل است. مواد استفاده شده کاملاً زیست سازگار و فاقد فلز می‌باشند.',
        features: [
          'استحکام ۱۴۰۰-۱۲۰۰ مگاپاسکال',
          'شفافیت بالا مشابه دندان طبیعی',
          'سازگاری کامل با بافت لثه',
          'مقاومت در برابر شکست',
          'رنگ‌پذیری عالی',
          'فاقد فلز و کاملاً زیست سازگار'
        ],
        indications: [
          'دندان‌های خلفی',
          'بریج‌های کوتاه', 
          'بازسازی کامل تاج',
          'دندان‌های با سطح اکلوزال بالا',
          'بیماران با حساسیت به فلزات'
        ],
        duration: '۲-۳ روز کاری',
        warranty: '۱۰ سال',
        image: '/assets/images/services/zirconia-crown.jpg',
        brands: ['Katana', 'Lava Plus', 'BruxZir', 'Prettau'],
        selectedBrand: 'Katana',
        category: 'crown-bridge',
        technicalSpecs: {
          'استحکام': '۱۴۰۰-۱۲۰۰ MPa',
          'شفافیت': 'High Translucent',
          'ضخامت حداقل': '۰.۵ میلی‌متر',
          'دمای سینترینگ': '۱۵۰۰-۱۶۰۰ درجه',
          'زمان ساخت': '۲-۳ روز',
          'چگالی': '۶.۰۸ g/cm³',
          'سختی ویکرز': '۱۲۰۰ HV'
        },
        benefits: [
          'زیبایی طبیعی و شفافیت بالا',
          'استحکام بسیار مناسب برای دندان‌های خلفی',
          'سازگاری عالی با بافت لثه',
          'مقاومت در برابر سایش و شکست',
          'عدم ایجاد حساسیت یا آلرژی'
        ],
        contraindications: [
          'دندان‌های با فضای بسیار محدود',
          'موارد نیاز به شفافیت بسیار بالا (دندان‌های قدامی)',
          'بریج‌های طولانی بیشتر از ۴ واحد'
        ],
        maintenance: [
          'رعایت بهداشت دهان و دندان',
          'معاینات دوره‌ای هر ۶ ماه',
          'پرهیز از جویدن اجسام سخت',
          'استفاده از محافظ شبانه در صورت دندان قروچه'
        ]
      },
      2: {
        id: 2,
        title: 'روکش IPS e.max',
        description: 'روکش سرامیکی با شفافیت استثنایی برای دندان‌های قدامی',
        detailedDescription: 'روکش IPS e.max از جنس لیتیوم دی سیلیکیت ساخته می‌شود که ترکیبی عالی از استحکام و زیبایی ارائه می‌دهد. این روکش‌ها برای دندان‌های قدامی که زیبایی اولویت دارد، بسیار مناسب هستند. شفافیت و عمق نوری مشابه مینای دندان طبیعی داشته و امکان تطابق رنگ کامل با دندان‌های مجاور را فراهم می‌کند.',
        features: [
          'شفافیت بسیار بالا',
          'استحکام ۴۰۰ مگاپاسکال',
          'تطابق رنگ کامل',
          'زیبایی بی‌نظیر',
          'مقاومت در برابر سایش',
          'سطح صاف و ضد لک'
        ],
        indications: [
          'دندان‌های جلو',
          'لمینیت',
          'ونیر',
          'اینله و انله',
          'بریج‌های سه واحدی قدامی'
        ],
        duration: '۳-۴ روز کاری',
        warranty: '۸ سال',
        image: '/assets/images/services/emax-crown.jpg',
        brands: ['IPS e.max CAD', 'IPS e.max Press', 'IPS e.max ZirCAD'],
        selectedBrand: 'IPS e.max CAD',
        category: 'crown-bridge',
        technicalSpecs: {
          'استحکام': '۴۰۰ MPa',
          'شفافیت': 'Very High Translucent',
          'ضخامت حداقل': '۰.۶ میلی‌متر',
          'روش ساخت': 'CAD/CAM یا پرس',
          'زمان ساخت': '۳-۴ روز',
          'ضریب انبساط حرارتی': '۱۰.۶ × 10⁻⁶/K',
          'سختی': '۵.۸ GPa'
        },
        benefits: [
          'شفافیت استثنایی مشابه دندان طبیعی',
          'زیبایی بی‌نظیر برای دندان‌های قدامی',
          'تطابق رنگ کامل',
          'سازگاری عالی با لثه',
          'مقاومت در برابر لک و تغییر رنگ'
        ],
        contraindications: [
          'دندان‌های خلفی با فشار جویدن بالا',
          'بریج‌های طولانی',
          'موارد با محدودیت فضای عمودی'
        ],
        maintenance: [
          'تمیز کردن روزانه با مسواک نرم',
          'استفاده از نخ دندان',
          'پرهیز از جویدن یخ یا اجسام سخت',
          'معاینات منظم دندانپزشکی'
        ]
      },
      3: {
        id: 3,
        title: 'روکش اندو (Endo Crown)',
        description: 'روکش مخصوص دندان‌های درمان ریشه شده با پوشش کامل سطح اکلوزال',
        detailedDescription: 'روکش اندو یک تکنیک مدرن برای بازسازی دندان‌های درمان ریشه شده است که نیاز به پست را کاهش می‌دهد. این روش با پوشش کامل سطح اکلوزال و استفاده از چسبندگی رزینی، استحکام بالایی به دندان می‌بخشد و ساختار باقیمانده دندان را حفظ می‌کند.',
        features: [
          'پوشش کامل اکلوزال',
          'حفظ ساختار دندان',
          'اتصال مستحکم به پست',
          'کاهش نیاز به پست فلزی',
          'توزیع یکنواخت نیرو'
        ],
        indications: [
          'دندان‌های درمان ریشه',
          'تاج‌های کوتاه',
          'حفره‌های وسیع',
          'دندان‌های با دیواره نازک',
          'مولرهای با سطح اکلوزال وسیع'
        ],
        duration: '۳-۴ روز کاری',
        warranty: '۷ سال',
        image: '/assets/images/services/endo-crown.jpg',
        brands: ['IPS e.max', 'Zirconia', 'Hybrid'],
        selectedBrand: 'IPS e.max',
        category: 'crown-bridge',
        technicalSpecs: {
          'ضخامت مرکزی': '۱.۵-۲ میلی‌متر',
          'ضخامت دیواره': '۱ میلی‌متر',
          'عمق کف': '۲-۳ میلی‌متر',
          'زاویه دیواره': '۱۰-۲۰ درجه',
          'زمان ساخت': '۳-۴ روز'
        },
        benefits: [
          'حفظ بیشتر ساختار دندان',
          'کاهش استرس بر روی دندان',
          'استحکام بالای اتصال',
          'زیبایی مناسب',
          'طول عمر بالای درمان'
        ]
      },
      4: {
        id: 4,
        title: 'پست و کور زیرکونیا (Zirconia Post & Core)',
        description: 'پست و کور یکپارچه زیرکونیا برای بازسازی دندان‌های درمان ریشه',
        detailedDescription: 'پست و کور زیرکونیا یک سیستم یکپارچه و بدون فلز برای بازسازی دندان‌های درمان ریشه شده است. این سیستم استحکام بالایی داشته و از نظر زیبایی بسیار برتر از پست‌های فلزی است. شفافیت نور از طریق پست زیرکونیا، زیبایی طبیعی‌تری به دندان‌های قدامی می‌بخشد.',
        features: [
          'یکپارچگی ساختاری',
          'شفافیت نور',
          'سازگاری بافتی',
          'مقاومت بالا',
          'زیبایی طبیعی'
        ],
        indications: [
          'دندان‌های قدامی درمان ریشه',
          'تاج‌های با دیواره نازک',
          'بازسازی هسته',
          'موارد نیاز به زیبایی بالا',
          'بیماران با حساسیت به فلزات'
        ],
        duration: '۲-۳ روز کاری',
        warranty: '۸ سال',
        image: '/assets/images/services/zirconia-post.jpg',
        brands: ['CosmoPost', 'ZirconiaPost', 'Anatomical'],
        selectedBrand: 'CosmoPost',
        category: 'crown-bridge',
        technicalSpecs: {
          'قطر پست': '۱.۵-۲ میلی‌متر',
          'طول پست': '۷-۹ میلی‌متر',
          'استحکام': '۹۰۰ MPa',
          'روش چسباندن': 'رزین کامپوزیت',
          'زمان ساخت': '۲-۳ روز'
        }
      }
    },
    'veneers': {
      5: {
        id: 5,
        title: 'ونیر سرامیکی (Ceramic Veneer)',
        description: 'پوسته‌های نازک سرامیکی برای اصلاح فرم و رنگ دندان‌ها',
        detailedDescription: 'ونیرهای سرامیکی پوسته‌های نازکی هستند که روی سطح دندان چسبانده می‌شوند. این روش بدون نیاز به تراش زیاد دندان، امکان اصلاح رنگ، فرم و موقعیت دندان‌ها را فراهم می‌کند. ونیرها از جنس سرامیک با شفافیت بالا ساخته شده و ظاهری کاملاً طبیعی به دندان می‌دهند.',
        features: [
          'ضخامت ۰.۳-۰.۵ میلی‌متر',
          'مقاومت در برابر لک',
          'تطابق رنگ کامل',
          'ماندگاری طولانی',
          'حداقل تراش دندان',
          'شفافیت طبیعی'
        ],
        indications: [
          'اصلاح رنگ دندان',
          'بستن فاصله دندانی',
          'اصلاح فرم دندان',
          'ترمیم لب پریدگی',
          'بهبود طرح لبخند'
        ],
        duration: '۵-۷ روز کاری',
        warranty: '۱۰ سال',
        image: '/assets/images/services/ceramic-veneer.jpg',
        brands: ['IPS e.max', 'Feldspathic', 'Empress', 'CEREC'],
        selectedBrand: 'IPS e.max',
        category: 'veneers',
        technicalSpecs: {
          'ضخامت': '۰.۳-۰.۵ میلی‌متر',
          'استحکام': '۱۵۰-۲۰۰ MPa',
          'شفافیت': 'Very High',
          'روش چسباندن': 'رزین کامپوزیت',
          'زمان ساخت': '۵-۷ روز',
          'مقاومت سایش': 'مشابه مینای دندان'
        },
        benefits: [
          'حداقل تراش دندان',
          'زیبایی طبیعی و درخشان',
          'مقاومت در برابر لک و تغییر رنگ',
          'طول عمر طولانی',
          'تطابق کامل با رنگ دندان‌های طبیعی'
        ]
      }
    },
    'occlusal-appliances': {
      6: {
        id: 6,
        title: 'نایت گارد (Night Guard)',
        description: 'محافظ شبانه برای جلوگیری از سایش دندان‌ها',
        detailedDescription: 'نایت گارد محافظی است که در طول شب استفاده می‌شود تا از سایش دندان‌ها در اثر دندان قروچه (براکسیزم) جلوگیری کند. این دستگاه همچنین برای کاهش دردهای مفصل فکی و محافظت از درمان‌های دندانپزشکی استفاده می‌شود. جنس نرم و انعطاف‌پذیر آن باعث راحتی بیمار می‌شود.',
        features: [
          'جنس نرم و راحت',
          'ضد حساسیت',
          'قابل شستشو',
          'دوام بالا',
          'فیت دقیق',
          'شفاف و نامرئی'
        ],
        indications: [
          'دندان قروچه',
          'سایش دندانی',
          'دردهای مفصل فکی',
          'محافظت از ایمپلنت',
          'سردردهای ناشی از فشار فک'
        ],
        duration: '۲ روز کاری',
        warranty: '۲ سال',
        image: '/assets/images/services/night-guard.jpg',
        brands: ['Dental Duty', 'SleepRight', 'Proteeth', 'Sova'],
        selectedBrand: 'Dental Duty',
        category: 'occlusal-appliances',
        technicalSpecs: {
          'جنس': 'پلی اورتان نرم',
          'ضخامت': '۲-۳ میلی‌متر',
          'رنگ': 'شفاف یا آبی',
          'زمان ساخت': '۲ روز',
          'عمر مفید': '۲-۳ سال',
          'دمای شستشو': 'آب سرد'
        },
        maintenance: [
          'شستشو روزانه با آب سرد',
          'تمیز کردن با مسواک نرم',
          'نگهداری در جعبه مخصوص',
          'دور از نور مستقیم خورشید',
          'معاینه سالانه توسط دندانپزشک'
        ]
      }
    },
    'digital-dentistry': {
      7: {
        id: 7,
        title: 'طراحی موم و طراحی لبخند (Wax-Up & Smile Design)',
        description: 'طراحی سه‌بعدی لبخند و ساخت نمونه مومی برای پیش‌بینی نتیجه نهایی',
        detailedDescription: 'طراحی موم و لبخند یک فرآیند برنامه‌ریزی دقیق برای درمان‌های زیبایی دندان است. در این روش ابتدا یک مدل مومی از طرح نهایی دندان‌ها ساخته شده و به بیمار نشان داده می‌شود. این امکان را فراهم می‌کند که بیمار نتیجه نهایی درمان را قبل از شروع کار مشاهده کند و در صورت نیاز تغییرات اعمال شود.',
        features: [
          'طراحی دیجیتال',
          'پیش‌بینی نتیجه',
          'مشاوره تخصصی',
          'نمونه مومی',
          'شبیه‌سازی سه‌بعدی'
        ],
        indications: [
          'برنامه‌ریزی درمان زیبایی',
          'مشاوره قبل از درمان',
          'شبیه‌سازی نتیجه',
          'برنامه‌ریزی ایمپلنت',
          'طراحی لبخند هالیوودی'
        ],
        duration: '۲-۳ روز کاری',
        warranty: '-',
        image: '/assets/images/services/waxup-design.jpg',
        brands: ['3Shape', 'Exocad', 'DentalCAD'],
        selectedBrand: '3Shape',
        category: 'digital-dentistry',
        technicalSpecs: {
          'نرم‌افزار طراحی': '3Shape Dental System',
          'دقت طراحی': '۲۰ میکرون',
          'فرمت خروجی': 'STL, PLY, OBJ',
          'زمان طراحی': '۱-۲ روز',
          'مقیاس': '۱:۱'
        }
      }
    },
    'implant-solutions': {
      8: {
        id: 8,
        title: 'روکش ایمپلنت زیرکونیا (Zirconia Implant Crown)',
        description: 'روکش مخصوص ایمپلنت با اتصال دقیق و زیبایی مطلوب',
        detailedDescription: 'روکش ایمپلنت زیرکونیا مخصوص ایمپلنت‌های دندانی طراحی شده است. این روکش‌ها با اتصال دقیق به اباتمنت ایمپلنت، پسیو فیت کامل را تضمین می‌کنند. زیبایی طبیعی و سازگاری با بافت لثه از ویژگی‌های بارز این نوع روکش‌ها است.',
        features: [
          'اتصال دقیق',
          'پسیو فیت کامل',
          'زیبایی طبیعی',
          'سازگاری با بافت لثه',
          'مقاومت در برابر شکست'
        ],
        indications: [
          'تک ایمپلنت',
          'بریج ایمپلنت',
          'پروتزهای فول موس',
          'ایمپلنت‌های قدامی',
          'بازسازی زیبایی'
        ],
        duration: '۴-۵ روز کاری',
        warranty: '۱۲ سال',
        image: '/assets/images/services/implant-prosthetic.jpg',
        brands: ['NobelProcera', 'Straumann', 'Zimmer'],
        selectedBrand: 'NobelProcera',
        category: 'implant-solutions',
        technicalSpecs: {
          'فاصله اتصال': 'کمتر از ۳۰ میکرون',
          'استحکام': '۱۲۰۰ MPa',
          'شفافیت': 'High Translucent',
          'زمان ساخت': '۴-۵ روز',
          'سازگاری': 'کلیه سیستم‌های ایمپلنت'
        }
      }
    },
    'provisionals': {
      9: {
        id: 9,
        title: 'روکش موقت PMMA',
        description: 'روکش‌های موقت با کیفیت بالا برای دوره درمان',
        detailedDescription: 'روکش‌های موقت PMMA برای محافظت از دندان‌های تراش خورده در دوره درمان ساخته می‌شوند. این روکش‌ها علاوه بر محافظت از دندان، زیبایی قابل قبولی داشته و به بیمار امکان می‌دهند با طرح نهایی درمان آشنا شود. مواد استفاده شده کاملاً زیست سازگار و فاقد BPA می‌باشند.',
        features: [
          'سریع‌الاجرا',
          'زیبایی قابل قبول',
          'محافظت از دندان',
          'قیمت مناسب',
          'زیست سازگار'
        ],
        indications: [
          'دوره درمان موقت',
          'آزمایش طرح درمان',
          'محافظت از دندان تراش خورده',
          'دوره osseointegration ایمپلنت'
        ],
        duration: '۱ روز کاری',
        warranty: '۶ ماه',
        image: '/assets/images/services/pmma-temporary.jpg',
        brands: ['Telio', 'Protemp', 'Luxatemp'],
        selectedBrand: 'Telio',
        category: 'provisionals',
        technicalSpecs: {
          'جنس': 'PMMA (پلی متیل متاکریلات)',
          'زمان ساخت': '۱ روز',
          'عمر مفید': '۶-۱۲ ماه',
          'رنگ‌پذیری': 'عالی',
          'استحکام': '۸۰ MPa'
        }
      }
    },
    'thermoforming': {
      10: {
        id: 10,
        title: 'تری بلیچینگ (Bleaching Tray)',
        description: 'قالب مخصوص بلیچینگ خانگی برای سفید کردن دندان‌ها',
        detailedDescription: 'تری بلیچینگ یک روش موثر برای سفید کردن دندان‌ها در منزل است. قالب مخصوص برای هر بیمار به صورت سفارشی ساخته شده و فیت دقیقی روی دندان‌ها دارد. این روش امکان استفاده از ژل بلیچینگ با غلظت مناسب را تحت نظر دندانپزشک فراهم می‌کند.',
        features: [
          'طراحی شخصی‌سازی شده',
          'فیت دقیق',
          'مواد سازگار',
          'کارایی بالا',
          'قابل استفاده مجدد'
        ],
        indications: [
          'سفید کردن دندان',
          'درمان بلیچینگ',
          'حفظ نتیجه بلیچینگ',
          'اصلاح رنگ دندان‌های زرد'
        ],
        duration: '۱ روز کاری',
        warranty: '۱ سال',
        image: '/assets/images/services/bleaching-tray.jpg',
        brands: ['Opalescence', 'Pola', 'Zoom'],
        selectedBrand: 'Opalescence',
        category: 'thermoforming',
        technicalSpecs: {
          'جنس': 'کوپلیمر اتیلن وینیل استات',
          'ضخامت': '۰.۸-۱.۲ میلی‌متر',
          'شفافیت': 'شفاف',
          'زمان ساخت': '۱ روز',
          'انعطاف‌پذیری': 'عالی'
        }
      }
    }
  };

  currentService: Service | null = null;
  categorySlug: string = '';
  serviceId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categorySlug = params.get('category') || '';
      this.serviceId = Number(params.get('serviceId'));
      
      const categoryData = this.serviceData[this.categorySlug];
      if (categoryData) {
        this.currentService = categoryData[this.serviceId];
      }
      
      if (!this.currentService) {
        console.warn(`سرویس ${this.serviceId} در دسته‌بندی ${this.categorySlug} یافت نشد`);
        this.router.navigate(['/services', this.categorySlug]);
        return;
      }

      console.log('سرویس بارگذاری شد:', this.currentService);
    });
  }

  changeBrand(brand: string) {
    if (this.currentService) {
      this.currentService.selectedBrand = brand;
    }
  }

  getCategoryTitle(): string {
    const categoryTitles: { [key: string]: string } = {
      'crown-bridge': 'Crown & Bridge',
      'veneers': 'Veneers',
      'occlusal-appliances': 'Occlusal Appliances',
      'digital-dentistry': 'Digital Dentistry',
      'implant-solutions': 'Implant Solutions',
      'provisionals': 'Provisionals',
      'thermoforming': 'In-Office Thermoforming'
    };
    return categoryTitles[this.categorySlug] || 'خدمات';
  }

  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/assets/images/placeholder.jpg';
  }
}