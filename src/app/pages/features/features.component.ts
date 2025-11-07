import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    { icon: 'precision_manufacturing', title: 'فناوری دیجیتال', description: 'ساخت دقیق و سریع روکش‌ها و پروتزهای دندانی' },
    { icon: 'verified_user', title: 'کیفیت تضمینی', description: 'مواد اولیه با کیفیت بالا و استانداردهای جهانی' },
    { icon: 'support_agent', title: 'پشتیبانی تخصصی', description: 'مشاوره و پاسخگویی به دندانپزشکان و مراکز درمانی' }
  ];
}
