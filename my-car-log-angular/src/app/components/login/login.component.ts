import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginModel } from '../../models/user/login.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    TranslocoDirective,
    MatProgressBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loading = false;
  login = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  myForm = new FormGroup({
    login: this.login,
    password: this.password,
  });
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const login: LoginModel = {
      username: this.login.value as string,
      password: this.password.value as string,
    };

    this.loading = true;

    this.authService.login(login).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.loading = false;
      },
      error: (err) => {
        err.error.message === 'Invalid password'
          ? this.password.setErrors({ notMatch: true })
          : this.login.setErrors({ notExist: true });
        this.loading = false;
      },
    });
  }
}
