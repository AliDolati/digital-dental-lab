import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'دکتر احمدی', text: 'روکش‌ها دقیق و با کیفیت هستند.', avatar: 'assets/testimonial1.jpg' },
    { name: 'دکتر حسینی', text: 'پشتیبانی فوق‌العاده و پاسخگو.', avatar: 'assets/testimonial2.jpg' },
    { name: 'دکتر کریمی', text: 'پروسه سفارش بسیار سریع انجام شد.', avatar: 'assets/testimonial3.jpg' }
  ];
  currentTestimonial = 0;

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }
  prevTestimonial() {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
