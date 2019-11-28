import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module.tns').then(m => m.HomeModule)
  },

  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module.tns').then(m => m.ChatModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module.tns').then(m => m.BuscarModule)
  },
  {
    path: 'buscar/',
    loadChildren: () => import('./buscar/buscar.module.tns').then(m => m.BuscarModule)
  },
  {
    path: 'lista/:index', 
    loadChildren: () => import('./lista/lista.module.tns').then(m => m.ListaModule)
  },
];
