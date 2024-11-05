import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AdditionalSettingsComponent } from './additional-settings/additional-settings.component';
import { UserService } from '../../services/user.service';
import { TranslocoDirective } from '@jsverse/transloco';
import { UserDetailsModel } from '../../models/user/userDetails.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [
    MatTabsModule,
    SecuritySettingsComponent,
    GeneralSettingsComponent,
    AdditionalSettingsComponent,
    TranslocoDirective,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements OnInit {
  userService = inject(UserService);
  userDetails: UserDetailsModel | undefined;

  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails(): void {
    this.userService.getUserDetails().subscribe((res) => {
      res = this.userDetails as UserDetailsModel;
    });
  }
}
