// src/app/app.routes.ts - نسخه نهایی اصلاح شده
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    },

{
    path: 'docs',
    loadComponent: () => import('./components/docs/docs.component').then(m => m.DocsComponent),
},
    {
        path: 'services',
        loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    },
    {
        path: 'gallery',
        loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent),
    },
    {
        path: 'technology',
        loadComponent: () => import('./components/technology/technology.component').then(m => m.TechnologyComponent),
    },
    
    // routes برای مستندات - بدون کامپوننت‌های missing
    { 
        path: 'ai-docs', 
        redirectTo: '/ai-documentation-hub.html',
        pathMatch: 'full'
    },
    { 
        path: 'project-memory', 
        redirectTo: '/project-memory.json',
        pathMatch: 'full'
    },
    { 
        path: 'changelog', 
        redirectTo: '/CHANGELOG.md',
        pathMatch: 'full'
    },
    
    // redirect برای هر مسیر دیگر به هوم پیج
    { 
        path: '**', 
        redirectTo: '',
        pathMatch: 'full'
    }
];