import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { AlojamientoService } from '../../core/services/alojamiento-service';
import { Alojamiento } from '../../core/model/alojamiento.model';

@Component({
  selector: 'app-alojamientos',
  imports: [Card, Button, FormsModule],
  templateUrl: './alojamientos.html',
  styleUrl: './alojamientos.css',
})
export class Alojamientos implements OnInit {
  private readonly alojamientoService = inject(AlojamientoService);
  private readonly route = inject(ActivatedRoute);

  private todos: Alojamiento[] = [];
  cards = signal<Alojamiento[]>([]);
  ciudades = signal<string[]>([]);
  tipos = signal<string[]>([]);

  ciudad = '';
  huespedes: number | null = null;
  tipo = '';
  precioMax: number | null = null;
  busqueda = '';

  ngOnInit(): void {
    this.alojamientoService.obtenerAlojamientos().subscribe((alojamientos) => {
      this.todos = alojamientos;
      this.ciudades.set([...new Set(alojamientos.map((a) => a.ciudad))].sort());
      this.tipos.set([...new Set(alojamientos.map((a) => a.tipo))].sort());

      this.busqueda = this.route.snapshot.queryParamMap.get('q') ?? '';
      this.aplicarFiltros();
    });

    this.route.queryParamMap.subscribe((params) => {
      this.busqueda = params.get('q') ?? '';
      this.aplicarFiltros();
    });
  }

  aplicarFiltros(): void {
    const q = this.busqueda.trim().toLowerCase();

    this.cards.set(
      this.todos.filter((a) => {
        const okCiudad = !this.ciudad || a.ciudad === this.ciudad;
        const okTipo = !this.tipo || a.tipo === this.tipo;
        const okHuespedes = !this.huespedes || a.capacidad >= this.huespedes;
        const okPrecio = !this.precioMax || a.precioNoche <= this.precioMax;
        const okTexto =
          !q ||
          a.nombre.toLowerCase().includes(q) ||
          a.ciudad.toLowerCase().includes(q) ||
          a.ubicacion.toLowerCase().includes(q);

        return okCiudad && okTipo && okHuespedes && okPrecio && okTexto;
      })
    );
  }

  limpiarFiltros(): void {
    this.ciudad = '';
    this.huespedes = null;
    this.tipo = '';
    this.precioMax = null;
    this.busqueda = '';
    this.aplicarFiltros();
  }
}
