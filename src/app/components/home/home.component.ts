import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent], // ServicesComponent رو حذف کن
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public translation: TranslationService) {}
}