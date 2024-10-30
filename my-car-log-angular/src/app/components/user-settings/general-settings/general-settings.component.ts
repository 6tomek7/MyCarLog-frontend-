import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LanguageOptionComponent } from '../../../core/language-option/language-option.component';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [TranslocoDirective, MatSlideToggleModule, LanguageOptionComponent],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss',
})
export class GeneralSettingsComponent {}
