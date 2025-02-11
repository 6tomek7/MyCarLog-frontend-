import { Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
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
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'password-change',
    loadComponent: () =>
      import('./components/password-change/password-change.component').then(
        (c) => c.PasswordChangeComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./components/user-settings/user-settings.component').then(
        (c) => c.UserSettingsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/wrong-adress/wrong-adress.component').then(
        (c) => c.WrongAdressComponent
      ),
  },
];
