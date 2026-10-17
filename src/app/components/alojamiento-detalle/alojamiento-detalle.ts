import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Button } from '../button/button';
import { CustomInput } from '../custom-input/custom-input';
import { AlojamientoService } from '../../core/services/alojamiento-service';
import { ReservaService } from '../../core/services/reserva-service';
import { Alojamiento } from '../../core/model/alojamiento.model';
import { Resena } from '../../core/model/resena.model';
import { Cotizacion } from '../../core/model/cotizacion.model';
import { Reserva } from '../../core/model/reserva.model';

@Component({
  selector: 'app-alojamiento-detalle',
  imports: [Button, CustomInput, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './alojamiento-detalle.html',
  styleUrl: './alojamiento-detalle.css',
})
export class AlojamientoDetalle implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly alojamientoService = inject(AlojamientoService);
  private readonly reservaService = inject(ReservaService);

  alojamiento = signal<Alojamiento | null>(null);
  resenas = signal<Resena[]>([]);
  cotizacion = signal<Cotizacion | null>(null);
  error = signal('');
  mensaje = signal('');

  fechaLlegada = '';
  fechaSalida = '';
  huespedes = 1;
  nombreHuesped = '';
  correo = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.alojamientoService.obtenerAlojamientoPorId(id).subscribe((alojamiento) => {
      if (!alojamiento) {
        this.error.set('Alojamiento no encontrado.');
        return;
      }
      this.alojamiento.set(alojamiento);
      this.huespedes = 1;
    });

    this.alojamientoService.obtenerResenas(id).subscribe((lista) => {
      this.resenas.set(lista);
    });
  }

  calcularCotizacion(): void {
    const a = this.alojamiento();
    this.mensaje.set('');
    this.cotizacion.set(null);

    if (!a) {
      return;
    }

    if (a.precioNoche <= 0) {
      this.mensaje.set('El precio por noche no es válido.');
      return;
    }

    if (!this.fechaLlegada || !this.fechaSalida) {
      this.mensaje.set('Selecciona fecha de llegada y salida.');
      return;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const llegada = new Date(this.fechaLlegada + 'T00:00:00');
    const salida = new Date(this.fechaSalida + 'T00:00:00');

    if (llegada < hoy) {
      this.mensaje.set('La fecha de llegada no puede ser anterior a hoy.');
      return;
    }

    const noches = Math.round((salida.getTime() - llegada.getTime()) / (1000 * 60 * 60 * 24));
    if (noches <= 0) {
      this.mensaje.set('La fecha de salida debe ser posterior a la de llegada.');
      return;
    }

    if (this.huespedes <= 0) {
      this.mensaje.set('El número de huéspedes debe ser mayor que cero.');
      return;
    }

    if (this.huespedes > a.capacidad) {
      this.mensaje.set(`Máximo ${a.capacidad} huéspedes para este alojamiento.`);
      return;
    }

    const subtotal = noches * a.precioNoche;
    const tarifaLimpieza = a.tarifaLimpieza;
    const tarifaServicio = Math.round(subtotal * 0.1);

    this.cotizacion.set({
      fechaLlegada: this.fechaLlegada,
      fechaSalida: this.fechaSalida,
      huespedes: this.huespedes,
      noches,
      subtotal,
      tarifaLimpieza,
      tarifaServicio,
      total: subtotal + tarifaLimpieza + tarifaServicio,
    });
  }

  onNombreChange(valor: string | number): void {
    this.nombreHuesped = String(valor);
  }

  onCorreoChange(valor: string | number): void {
    this.correo = String(valor);
  }

  onHuespedesChange(valor: string | number): void {
    this.huespedes = Number(valor) || 0;
  }

  reservar(): void {
    const a = this.alojamiento();
    const c = this.cotizacion();

    if (!a || !c) {
      this.mensaje.set('Primero genera una cotización válida.');
      return;
    }

    if (!this.nombreHuesped.trim() || !this.correo.trim()) {
      this.mensaje.set('Ingresa nombre y correo del huésped.');
      return;
    }

    const reserva: Reserva = {
      id: 'RES-' + Date.now(),
      alojamientoId: a.id,
      nombreAlojamiento: a.nombre,
      ciudad: a.ciudad,
      fechaLlegada: c.fechaLlegada,
      fechaSalida: c.fechaSalida,
      huespedes: c.huespedes,
      noches: c.noches,
      total: c.total,
      nombreHuesped: this.nombreHuesped.trim(),
      correo: this.correo.trim(),
      estado: 'CONFIRMADA',
    };

    this.reservaService.guardarReserva(reserva);
    this.mensaje.set('Reserva registrada (simulada). Puedes verla en Mis reservas.');
  }
}
