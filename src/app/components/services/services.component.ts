import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  // اسکرول به بخش خدمات
  scrollToServices() {
    const servicesSection = document.getElementById('main-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // باز کردن جزئیات خدمات
  openServiceDetail(serviceType: string) {
    // اینجا می‌تونه به صفحه جزئیات خدمات هدایت بشه
    // یا مودال نمایش داده بشه
    console.log('Opening service detail for:', serviceType);
    
    // موقتاً آلرت نمایش می‌دیم
    const serviceNames: any = {
      'veneer': 'لمینیت سرامیکی',
      'crown': 'روکش دیجیتال',
      'implant': 'ایمپلنت و پروتز ثابت',
      'denture': 'پروتز متحرک'
    };
    
    alert(`اطلاعات کامل خدمات ${serviceNames[serviceType]} به زودی اضافه خواهد شد!`);
  }

  // برای دکمه نمونه کارها
  openGallery() {
    // هدایت به صفحه گالری
    window.location.href = '/gallery';
  }
}