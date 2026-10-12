import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../button/button';
import { Alojamiento } from '../../core/model/alojamiento.model';

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private readonly router = inject(Router);

  @Input() card!: Alojamiento;

  verDetalle() {
    this.router.navigate(['/alojamientos', this.card.id]);
  }
}
