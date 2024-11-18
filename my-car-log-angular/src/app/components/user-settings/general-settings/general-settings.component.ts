import { Component, inject, Input, OnInit } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LanguageOptionComponent } from '../../../core/language-option/language-option.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsModel } from '../../../models/user/user-details.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [
    TranslocoDirective,
    MatSlideToggleModule,
    LanguageOptionComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss',
})
export class GeneralSettingsComponent implements OnInit {
  @Input() details: UserDetailsModel | undefined;
  private readonly translocoService = inject(TranslocoService);
  private readonly userService = inject(UserService);
  mode = new FormControl('');
  language = new FormControl('');
  form = new FormGroup({ mode: this.mode, language: this.language });

  ngOnInit(): void {
    console.log(this.details);
    this.setValuesOfControls();
  }

  setValuesOfControls(): void {
    this.mode.setValue(this.details?.mode as string);
    this.language.setValue(this.details?.language as string);
  }

  saveChanges(): void {
    let newDetails = this.details as UserDetailsModel;
    newDetails.mode = this.mode.value as string;
    newDetails.language = this.language.value as string;

    this.userService.updateUserDetails(newDetails).subscribe();
  }
}
