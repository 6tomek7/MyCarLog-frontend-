import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './language-option.component.html',
  styleUrl: './language-option.component.scss',
})
export class LanguageOptionComponent implements OnInit {
  selectedLanguage = 'en';

  private readonly translocoService = inject(TranslocoService);

  ngOnInit(): void {
    this.changeLanguage();
  }

  changeLanguage(): void {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }
}
