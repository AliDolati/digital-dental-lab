import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * نقطه شروع برنامه Digital Dental Lab
 * ورژن 2.0.0 - سیستم کامل دندانپزشکی دیجیتال
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));