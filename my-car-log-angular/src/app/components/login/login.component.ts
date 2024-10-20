import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginModel } from '../../models/user/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    const login: LoginModel = {
      username: this.myForm.get('login')?.value as string,
      password: this.myForm.get('password')?.value as string,
    };

    this.userService.signIn(login).subscribe((res) => {
      console.log('test');
    });
  }
}
