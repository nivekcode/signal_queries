import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'new',
    loadComponent: () => import('./new/new-tabs.component')
  },
  { path: 'old',
    loadComponent: () => import('./old/old-tabs.component')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'old'
  }
];
