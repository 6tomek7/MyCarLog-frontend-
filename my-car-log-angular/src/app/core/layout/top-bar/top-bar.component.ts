import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule, RouterModule, TranslocoDirective, FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  selectedLanguage = 'pl';
  constructor(private translocoService: TranslocoService) {}
  ngOnInit(): void {
    this.changeLanguage();
  }

  changeLanguage() {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }
}
