import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  technologies = [
    {
      title: 'CAD/CAM Technology',
      description: 'طراحی و ساخت کامپیوتری با دقت میکرونی',
      icon: '💻',
      features: ['طراحی سه بعدی', 'دقت بالا', 'سرعت تولید']
    },
    {
      title: '3D Printing',
      description: 'چاپ سه بعدی پیشرفته برای ساخت پروتز',
      icon: '🖨️',
      features: ['مواد با کیفیت', 'چاپ سریع', 'انعطاف پذیری']
    },
    {
      title: 'Digital Smile Design',
      description: 'طراحی دیجیتال لبخند با نرم‌افزارهای پیشرفته',
      icon: '😊',
      features: ['شبیه‌سازی واقعی', 'پیش‌نمایش نتیجه', 'طراحی شخصی']
    },
    {
      title: 'Intraoral Scanning',
      description: 'اسکن دیجیتال داخل دهان بدون نیاز به قالب‌گیری',
      icon: '📷',
      features: ['دقت بالا', 'راحتی بیمار', 'ذخیره دیجیتال']
    }
  ];
}