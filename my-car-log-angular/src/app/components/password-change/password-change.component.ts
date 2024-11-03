import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslocoDirective } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { confirmPasswordValidator } from '../../shared/validators/confirm-password.validator';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    TranslocoDirective,
    MatProgressBarModule,
  ],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss',
})
export class PasswordChangeComponent {
  loading = false;

  passwordValidators = { minLength: 8, maxLength: 25 };
  oldPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(this.passwordValidators.minLength),
    Validators.maxLength(this.passwordValidators.maxLength),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{1,}$/),
  ]);
  newPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(this.passwordValidators.minLength),
    Validators.maxLength(this.passwordValidators.maxLength),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{1,}$/),
  ]);
  passwordConfirmation = new FormControl('', [Validators.required]);

  myForm = new FormGroup(
    {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      passwordConfirmation: this.passwordConfirmation,
    },
    confirmPasswordValidator
  );
  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const passwords = {};

    this.loading = true;

    this.userService.updatePassword(passwords).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.loading = false;
      },
      error: (err) => {
        err.error.message === 'Invalid password'
          ? this.oldPassword.setErrors({ notMatch: true })
          : null;
        this.loading = false;
      },
    });
  }
}
