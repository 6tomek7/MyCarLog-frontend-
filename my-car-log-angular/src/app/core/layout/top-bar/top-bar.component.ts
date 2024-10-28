import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { AuthService } from '../../authentication/auth.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    TranslocoDirective,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
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
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.changeLanguage();
    this.checkUser();
  }

  changeLanguage(): void {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  checkUser(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
      this.username = this.authService.getUsername();
    });
  }

  onLogout(): void {
    this.authService.logout();
  }

  goToUserDetails(): void {
    this.router.navigate(['settings']);
  }
}
