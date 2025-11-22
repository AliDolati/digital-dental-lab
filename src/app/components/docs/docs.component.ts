// src/app/components/docs/docs.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-container">
      <h1>🧠 مستندات پروژه</h1>
      <div class="docs-links">
        <a href="/ai-documentation-hub.html" target="_blank" class="doc-link">
          📄 مرکز مستندات کامل
        </a>
        <a href="/project-memory.json" target="_blank" class="doc-link">
          💾 حافظه پروژه
        </a>
        <a href="/CHANGELOG.md" target="_blank" class="doc-link">
          📋 تاریخچه تغییرات
        </a>
      </div>
    </div>
  `,
  styles: [`
    .docs-container {
      padding: 2rem;
      text-align: center;
    }
    .docs-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }
    .doc-link {
      padding: 1rem;
      background: #1a237e;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      transition: background 0.3s;
    }
    .doc-link:hover {
      background: #1565c0;
    }
  `]
})
export class DocsComponent {}