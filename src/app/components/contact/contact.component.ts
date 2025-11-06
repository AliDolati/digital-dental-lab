import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { environment } from '../../../environments/environment'; // اضافه کردن این خط

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  };

  services = [
    'DIGITAL_CROWN',
    'VENEERS', 
    'IMPLANTS',
    'DENTURES',
    'CONSULTATION'
  ];

  isSubmitted = false;
  contactEmail = environment.contactEmail; // استفاده از environment
  contactPhone = environment.contactPhone;

  constructor(public translation: TranslationService) {}

  onSubmit() {
    console.log('فرم ارسال شد:', this.contactInfo);
    this.isSubmitted = true;
    
    setTimeout(() => {
      this.isSubmitted = false;
      this.contactInfo = { name: '', email: '', phone: '', message: '', service: '' };
    }, 3000);
  }

  getServiceName(serviceKey: string): string {
    return this.translation.translate('SERVICES.' + serviceKey);
  }
}