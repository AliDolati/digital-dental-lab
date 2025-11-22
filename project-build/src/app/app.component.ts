import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * کامپوننت اصلی برنامه
 * شامل هدر، فوتر و router-outlet
 * مسئول ساختار کلی layout
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 140px);
      padding-top: 80px; /* برای fixed header */
    }
    
    @media (max-width: 768px) {
      .main-content {
        padding-top: 70px;
        min-height: calc(100vh - 120px);
      }
    }
  `]
})
export class AppComponent {
  title = 'Digital Dental Lab v2';
}