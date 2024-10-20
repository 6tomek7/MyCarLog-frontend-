import { WrongAdressComponent } from './components/wrong-adress/wrong-adress.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/wrong-adress/wrong-adress.component').then(
        (c) => c.WrongAdressComponent
      ),
  },
];
