import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule], // HeroComponent رو حذف کن
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      key: 'DIGITAL_CROWN',
      icon: '🦷',
      descriptionKey: 'طراحی و ساخت روکش‌های دندان با دقت بالا به کمک CAD/CAM'
    },
    {
      key: 'VENEERS', 
      icon: '✨',
      descriptionKey: 'لمینیت‌های نازک و زیبا برای لبخند هالیوودی'
    },
    {
      key: 'IMPLANTS',
      icon: '🔩',
      descriptionKey: 'کاشت دندان با جدیدترین تکنولوژی‌های ایمپلنت'
    },
    {
      key: 'DENTURES',
      icon: '🦿',
      descriptionKey: 'ساخت پروتزهای متحرک با کیفیت و دقت بالا'
    }
  ];

  constructor(public translation: TranslationService) {}
}