import { ProgressBarComponent } from './core/layout/progress-bar/progress-bar.component';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './core/layout/top-bar/top-bar.component';
import { ProgressBarService } from './core/layout/progress-bar/progress-bar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    RouterLink,
    RouterLinkActive,
    ProgressBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  progressBarService = inject(ProgressBarService);

  ngOnInit(): void {
    // this.progressBarService.showLoading();
    // setTimeout(() => {
    //   this.progressBarService.hideLoading();
    // }, 3000);
  }
}
