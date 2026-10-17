import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [SearchBar, Button, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly router = inject(Router);

  onBuscar(termino: string): void {
    this.router.navigate(['/alojamientos'], {
      queryParams: termino ? { q: termino } : {},
    });
  }

  irA(ruta: string): void {
    this.router.navigate([ruta]);
  }
}
