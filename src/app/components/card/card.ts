import { Component, Input } from '@angular/core';
import { Button } from '../button/button';
import { Alojamiento } from '../../core/model/alojamiento.model';

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() card!: Alojamiento;

  onReservar() {
    console.log('Reservado:', this.card.nombre);
  }
}
