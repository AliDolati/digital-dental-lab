import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = 'fa';
  
  // دیکشنری ترجمه‌ها
  private translations: { [key: string]: { [key: string]: string } } = {
    'fa': {
      // هدر
      'HEADER.HOME': 'خانه',
      'HEADER.SERVICES': 'خدمات',
      'HEADER.TECHNOLOGY': 'تکنولوژی',
      'HEADER.GALLERY': 'گالری',
      'HEADER.CONTACT': 'تماس',
      'HEADER.LANGUAGE': 'زبان',
      
      // هیرو
      'HERO.TITLE': 'لابراتوار دندانپزشکی دیجیتال',
      'HERO.SUBTITLE': 'پیشرفته‌ترین خدمات دندانپزشکی دیجیتال با جدیدترین تکنولوژی‌های روز دنیا',
      'HERO.CTA_PRIMARY': 'مشاهده خدمات',
      'HERO.CTA_SECONDARY': 'تماس با ما',
      
      // خدمات
      'SERVICES.TITLE': 'خدمات تخصصی ما',
      'SERVICES.SUBTITLE': 'با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا',
      'SERVICES.DIGITAL_CROWN': 'روکش دیجیتال',
      'SERVICES.VENEERS': 'لمینیت سرامیکی',
      'SERVICES.IMPLANTS': 'ایمپلنت',
      'SERVICES.DENTURES': 'پروتز متحرک',
      'SERVICES.MORE_INFO': 'اطلاعات بیشتر',
      
      // تماس
      'CONTACT.TITLE': 'تماس با ما',
      'CONTACT.SUBTITLE': 'آماده پاسخگویی به سوالات شما هستیم',
      'CONTACT.FORM_TITLE': 'فرم درخواست مشاوره',
      'CONTACT.NAME': 'نام کامل',
      'CONTACT.EMAIL': 'ایمیل',
      'CONTACT.PHONE': 'تلفن همراه',
      'CONTACT.MESSAGE': 'پیام',
      'CONTACT.SERVICE_TYPE': 'نوع خدمت مورد نظر',
      'CONTACT.SUBMIT': 'ارسال درخواست'
    },
    'en': {
      // هدر
      'HEADER.HOME': 'Home',
      'HEADER.SERVICES': 'Services',
      'HEADER.TECHNOLOGY': 'Technology',
      'HEADER.GALLERY': 'Gallery',
      'HEADER.CONTACT': 'Contact',
      'HEADER.LANGUAGE': 'Language',
      
      // هیرو
      'HERO.TITLE': 'Digital Dental Laboratory',
      'HERO.SUBTITLE': 'Advanced digital dental services with the latest world technologies',
      'HERO.CTA_PRIMARY': 'View Services',
      'HERO.CTA_SECONDARY': 'Contact Us',
      
      // خدمات
      'SERVICES.TITLE': 'Our Specialized Services',
      'SERVICES.SUBTITLE': 'Using the most advanced technologies in the world',
      'SERVICES.DIGITAL_CROWN': 'Digital Crown',
      'SERVICES.VENEERS': 'Ceramic Veneers',
      'SERVICES.IMPLANTS': 'Implants',
      'SERVICES.DENTURES': 'Removable Dentures',
      'SERVICES.MORE_INFO': 'More Info',
      
      // تماس
      'CONTACT.TITLE': 'Contact Us',
      'CONTACT.SUBTITLE': 'We are ready to answer your questions',
      'CONTACT.FORM_TITLE': 'Consultation Request Form',
      'CONTACT.NAME': 'Full Name',
      'CONTACT.EMAIL': 'Email',
      'CONTACT.PHONE': 'Phone Number',
      'CONTACT.MESSAGE': 'Message',
      'CONTACT.SERVICE_TYPE': 'Desired Service Type',
      'CONTACT.SUBMIT': 'Submit Request'
    }
  };

  constructor() {}

  // تابع برای گرفتن ترجمه
  translate(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }

  // تغییر زبان
  setLanguage(lang: 'fa' | 'en') {
    this.currentLang = lang;
    
    // تغییر جهت صفحه
    if (lang === 'fa') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'fa';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
    
    // رفرش کامپوننت‌ها (می‌تونی با BehaviorSubject پیشرفته‌تر کنی)
    window.dispatchEvent(new Event('languageChanged'));
  }

  // گرفتن زبان جاری
  getCurrentLanguage(): string {
    return this.currentLang;
  }
}