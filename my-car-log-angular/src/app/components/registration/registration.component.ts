import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { RegistrationDataModel } from '../../models/user/registrationData.model';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from '../../shared/validators/confirm-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  usernameValidators = { minLength: 5, maxLength: 25 };
  passwordValidators = { minLength: 8, maxLength: 25 };
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(this.usernameValidators.minLength),
    Validators.maxLength(this.usernameValidators.maxLength),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(this.passwordValidators.minLength),
    Validators.maxLength(this.passwordValidators.maxLength),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{1,}$/),
  ]);
  passwordConfirmation = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  myForm = new FormGroup(
    {
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
      email: this.email,
    },
    confirmPasswordValidator
  );

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const registrationDataModel: RegistrationDataModel = {
      username: this.username.value as string,
      password: this.password.value as string,
      email: this.email.value as string,
    };

    this.userService.signUp(registrationDataModel).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        err.error.message === 'Username already exists' &&
          this.username.setErrors({ alreadyExist: true });

        err.error.message === 'Email already exists' &&
          this.email.setErrors({ alreadyExist: true });
      },
    });
  }
}
