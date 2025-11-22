import { Routes } from '@angular/router';

/**
 * Routing اصلی برنامه دندانپزشکی دیجیتال
 * ساختار مسیرهای SPA با lazy loading
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    title: 'HOME.TITLE',
    data: { animation: 'HomePage' }
  },
  {
    path: 'services',
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent),
    title: 'SERVICES.TITLE',
    data: { animation: 'ServicesPage' }
  },
  {
    path: 'services/:category',
    loadComponent: () => import('./components/services/service-category/service-category.component').then(m => m.ServiceCategoryComponent),
    title: 'SERVICES.CATEGORY_TITLE',
    data: { animation: 'CategoryPage' }
  },
  {
    path: 'services/detail/:id',
    loadComponent: () => import('./components/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
    title: 'SERVICES.DETAIL_TITLE',
    data: { animation: 'DetailPage' }
  },
  {
    path: 'gallery',
    loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'GALLERY.TITLE',
    data: { animation: 'GalleryPage' }
  },
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent),
    title: 'BLOG.TITLE',
    data: { animation: 'BlogPage' }
  },
  {
    path: 'blog/post/:id',
    loadComponent: () => import('./components/blog/post/post.component').then(m => m.PostComponent),
    title: 'BLOG.POST_TITLE',
    data: { animation: 'PostPage' }
  },
  {
    path: 'technology',
    loadComponent: () => import('./components/technology/technology.component').then(m => m.TechnologyComponent),
    title: 'TECHNOLOGY.TITLE',
    data: { animation: 'TechnologyPage' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    title: 'CONTACT.TITLE',
    data: { animation: 'ContactPage' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
    data: { animation: 'NotFoundPage' }
  }
];