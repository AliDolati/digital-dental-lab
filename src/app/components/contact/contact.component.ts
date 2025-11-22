import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  
  contactForm!: FormGroup;
  isSubmitting = false;
  
  // سوالات متداول
  faqs = [
    {
      question: 'مدت زمان پاسخگویی به پیام‌ها چقدر است؟',
      answer: 'پیام‌های شما حداکثر تا ۲۴ ساعت کاری پاسخ داده می‌شوند. در موارد فوری از طریق تلفن تماس بگیرید.',
      open: false
    },
    {
      question: 'آیا مشاوره اولیه رایگان است؟',
      answer: 'بله، مشاوره تلفنی و آنلاین به صورت کاملاً رایگان ارائه می‌شود.',
      open: false
    },
    {
      question: 'ساعات کاری شما چه زمانی است؟',
      answer: 'شنبه تا چهارشنبه از ۸ صبح تا ۶ عصر و پنجشنبه‌ها تا ۲ بعدازظهر آماده خدمات‌رسانی هستیم.',
      open: false
    },
    {
      question: 'آیا امکان مراجعه فوری وجود دارد؟',
      answer: 'برای موارد اورژانسی با شماره موبایل تماس بگیرید تا هماهنگی‌های لازم انجام شود.',
      open: false
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^09[0-9]{9}$/)]],
      email: ['', [Validators.email]],
      serviceType: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // بررسی اعتبار فیلد
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  // ارسال فرم
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // شبیه‌سازی ارسال فرم
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.showSuccessMessage();
        this.contactForm.reset();
      }, 2000);
    } else {
      // علامت‌گذاری همه فیلدها به عنوان touched برای نمایش خطاها
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  showSuccessMessage() {
    alert('پیام شما با موفقیت ارسال شد! در اسرع وقت با شما تماس خواهیم گرفت.');
  }

  // توابع ناوبری
  scrollToForm() {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToInfo() {
    const element = document.getElementById('contact-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // توابع تماس
  makeCall(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  sendEmail(email: string) {
    window.open(`mailto:${email}`, '_self');
  }

  openMap() {
    const address = 'تهران، خیابان ولیعصر، پلاک ۱۲۳۴';
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  }

  // مدیریت سوالات متداول
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}