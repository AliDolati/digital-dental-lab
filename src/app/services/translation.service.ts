// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  
  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    // زبان‌های پشتیبانی شده
    this.translate.addLangs(['fa', 'en']);
    
    // زبان پیش‌فرض
    this.translate.setDefaultLang('fa');
    
    // تشخیص زبان مرورگر یا ذخیره شده کاربر
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('preferred-language');
    const useLang = savedLang || (browserLang && this.translate.getLangs().includes(browserLang) ? browserLang : 'fa');
    
    this.setLanguage(useLang);
  }

  setLanguage(lang: string): void {
    if (this.isLanguageSupported(lang)) {
      this.translate.use(lang);
      this.applyLanguageDirection(lang);
      localStorage.setItem('preferred-language', lang);
    }
  }

  private applyLanguageDirection(lang: string): void {
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    
    document.body.classList.remove('ltr-direction', 'rtl-direction');
    document.body.classList.add(`${direction}-direction`);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  isLanguageSupported(lang: string): boolean {
    return this.translate.getLangs().includes(lang);
  }
}