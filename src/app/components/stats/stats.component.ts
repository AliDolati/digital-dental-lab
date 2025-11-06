import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats = [
    { number: '500+', label: 'کار انجام شده' },
    { number: '99%', label: 'رضایت مشتری' },
    { number: '۵+', label: 'سال تجربه' },
    { number: '۲۴/۷', label: 'پشتیبانی' }
  ];
}