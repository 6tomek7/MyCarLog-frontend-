import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { AuthService } from '../../authentication/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    TranslocoDirective,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = '';
  selectedLanguage = 'pl';
  constructor(
    private translocoService: TranslocoService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.changeLanguage();
    this.checkUser();
  }

  changeLanguage() {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  checkUser() {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
      this.username = this.authService.getUsername();
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
