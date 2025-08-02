import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="background-color: #1976d2; color: white; padding: 1rem; display: flex; gap: 1rem;">
      <a routerLink="/usuarios" routerLinkActive="active" style="color: white; text-decoration: none;">Usuários</a>
      <a routerLink="/perfis" routerLinkActive="active" style="color: white; text-decoration: none;">Perfis</a>
    </nav>
  `
})
export class NavbarComponent {}
