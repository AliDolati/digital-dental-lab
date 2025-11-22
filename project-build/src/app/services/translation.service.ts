import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * سرویس مدیریت ترجمه و چندزبانه
 * پشتیبانی از فارسی و انگلیسی با قابلیت تغییر داینامیک
 */
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  
  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  /**
   * مقداردهی اولیه سیستم ترجمه
   */
  private initializeTranslation(): void {
    // زبان‌های پشتیبانی شده
    this.translate.addLangs(['fa', 'en']);
    
    // زبان پیش‌فرض
    this.translate.setDefaultLang('fa');
    
    // تشخیص و تنظیم زبان مرورگر
    this.detectAndSetBrowserLanguage();
  }

  /**
   * تشخیص و تنظیم زبان مرورگر
   */
  private detectAndSetBrowserLanguage(): void {
    const browserLang = this.translate.getBrowserLang();
    const supportedLangs = this.translate.getLangs();
    const useLang = supportedLangs.includes(browserLang || '') ? browserLang : 'fa';
    
    this.switchLanguage(useLang || 'fa');
  }

  /**
   * تغییر زبان برنامه
   */
  switchLanguage(lang: string): void {
    if (this.isLanguageSupported(lang)) {
      this.translate.use(lang);
      
      // اعمال تغییرات مربوط به RTL/LTR
      this.applyLanguageDirection(lang);
      
      // ذخیره انتخاب کاربر
      localStorage.setItem('preferred-language', lang);
    }
  }

  /**
   * اعمال جهت نوشتار بر اساس زبان
   */
  private applyLanguageDirection(lang: string): void {
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    
    // اعمال کلاس جهت برای استایل‌های خاص
    document.body.classList.remove('ltr-direction', 'rtl-direction');
    document.body.classList.add(`${direction}-direction`);
  }

  /**
   * دریافت زبان فعلی
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  /**
   * چک کردن پشتیبانی زبان
   */
  isLanguageSupported(lang: string): boolean {
    return this.translate.getLangs().includes(lang);
  }

  /**
   * دریافت لیست زبان‌های پشتیبانی شده
   */
  getSupportedLanguages(): string[] {
    return this.translate.getLangs();
  }

  /**
   * بارگذاری زبان ذخیره شده کاربر
   */
  loadUserPreferredLanguage(): void {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && this.isLanguageSupported(savedLang)) {
      this.switchLanguage(savedLang);
    }
  }
}