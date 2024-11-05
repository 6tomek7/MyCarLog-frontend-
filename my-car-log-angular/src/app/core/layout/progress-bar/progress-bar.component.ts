import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, ReactiveFormsModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnInit {
  loading = false;
  progressBarService = inject(ProgressBarService);

  ngOnInit(): void {
    this.progressBarService.loading$.subscribe((res) => {
      this.loading = res;
    });
  }
}
