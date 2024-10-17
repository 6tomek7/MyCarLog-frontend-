import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}
