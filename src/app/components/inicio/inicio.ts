import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carrousel } from '../carrousel/carrousel';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { AlojamientoService } from '../../core/services/alojamiento-service';
import { Alojamiento } from '../../core/model/alojamiento.model';

@Component({
  selector: 'app-inicio',
  imports: [Carrousel, Card, Button, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  private readonly alojamientoService = inject(AlojamientoService);

  cards = signal<Alojamiento[]>([]);
  imagenesCarrusel = signal<{ src: string; alt: string }[]>([]);

  ngOnInit(): void {
    this.alojamientoService.obtenerAlojamientosDestacados(5).subscribe((alojamientos) => {
      this.cards.set(alojamientos);
      this.imagenesCarrusel.set(
        alojamientos.slice(0, 3).map((a) => ({
          src: a.imagenPrincipal,
          alt: a.nombre,
        }))
      );
    });
  }
}
