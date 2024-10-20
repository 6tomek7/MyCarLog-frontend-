import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./components/registration/registration.component').then(
        (c) => c.RegistrationComponent
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
