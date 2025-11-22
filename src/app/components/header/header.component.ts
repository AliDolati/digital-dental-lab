// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/">لابراتوار دندانپزشکی دیجیتال</a>
        </div>

        <ul class="nav-menu">
          <li><a routerLink="/" routerLinkActive="active">خانه</a></li>
          <li><a routerLink="/services" routerLinkActive="active">خدمات</a></li>
          <li><a routerLink="/gallery" routerLinkActive="active">گالری</a></li>
          <li><a routerLink="/blog" routerLinkActive="active">بلاگ</a></li>
          <li><a routerLink="/technology" routerLinkActive="active">تکنولوژی</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">تماس</a></li>
        </ul>

        <div class="language-switcher">
          <button>فارسی</button>
          <button>English</button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .logo a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    .nav-menu a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    
    .nav-menu a.active {
      color: #3498db;
    }
    
    .language-switcher {
      display: flex;
      gap: 0.5rem;
    }
    
    .language-switcher button {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      background: white;
      border-radius: 5px;
      cursor: pointer;
    }
    
    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }
      
      .nav-menu {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}