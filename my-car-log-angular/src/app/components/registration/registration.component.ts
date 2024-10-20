import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RegistrationDataModel } from '../../models/user/registrationData.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private userService: UserService) {}
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  onSubmit() {
    const registrationDataModel: RegistrationDataModel = {
      username: this.myForm.get('username')?.value as string,
      password: this.myForm.get('password')?.value as string,
      email: this.myForm.get('email')?.value as string,
    };

    this.userService.signUp(registrationDataModel).subscribe();
  }
}
