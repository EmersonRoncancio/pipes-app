import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page.component').then(m => m.BasicPageComponent),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component').then(m => m.CustomPageComponent),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component').then(m => m.NumbersPageComponent),
  },
  {
    path: '**',
    redirectTo: 'basic',
  }
];
