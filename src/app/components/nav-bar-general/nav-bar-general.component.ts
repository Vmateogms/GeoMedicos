import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar-general',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar-general.component.html',
  styleUrl: './nav-bar-general.component.css'
})
export class NavBarGeneralComponent {
  constructor(public authService: AuthService) {}
}
