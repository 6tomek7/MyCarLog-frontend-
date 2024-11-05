import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoDirective } from '@jsverse/transloco';
import { LanguageOptionComponent } from '../../../core/language-option/language-option.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { COUNTRIES } from '../../../shared/constants/country-list';

@Component({
  selector: 'app-additional-settings',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    TranslocoDirective,
    MatSlideToggleModule,
    LanguageOptionComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './additional-settings.component.html',
  styleUrl: './additional-settings.component.scss',
})
export class AdditionalSettingsComponent {
  countries = COUNTRIES;
  genders = ['male', 'female'];
  gender = new FormControl('', {});
  form = new FormGroup({
    gender: this.gender,
  });
}
