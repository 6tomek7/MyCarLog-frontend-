import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-security-settings',
  standalone: true,
  imports: [TranslocoDirective],
  templateUrl: './security-settings.component.html',
  styleUrl: './security-settings.component.scss',
})
export class SecuritySettingsComponent {}
