import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
