import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AdditionalSettingsComponent } from './additional-settings/additional-settings.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [
    MatTabsModule,
    SecuritySettingsComponent,
    GeneralSettingsComponent,
    AdditionalSettingsComponent,
  ],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent {}
