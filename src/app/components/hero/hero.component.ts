// src/app/components/hero/hero.component.ts
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ 'HERO.TITLE' | translate }}</h1>
          <p class="hero-subtitle">{{ 'HERO.SUBTITLE' | translate }}</p>
          <div class="hero-buttons">
            <button class="btn btn-primary" routerLink="/services">
              {{ 'HERO.CTA_PRIMARY' | translate }}
            </button>
            <button class="btn btn-secondary" routerLink="/contact">
              {{ 'HERO.CTA_SECONDARY' | translate }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 2.5rem;
      opacity: 0.9;
      line-height: 1.6;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-primary {
      background: #3498db;
      color: white;
    }
    
    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .hero-section {
        padding: 4rem 1rem;
        min-height: 50vh;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .btn {
        width: 200px;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroComponent {}