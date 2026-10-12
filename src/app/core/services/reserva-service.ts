import { Injectable } from '@angular/core';
import { Reserva } from '../model/reserva.model';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private readonly clave = 'reservas-estadia-lr';

  obtenerReservas(): Reserva[] {
    const data = localStorage.getItem(this.clave);
    if (!data) {
      return [];
    }
    return JSON.parse(data) as Reserva[];
  }

  guardarReserva(reserva: Reserva): void {
    const reservas = this.obtenerReservas();
    reservas.push(reserva);
    localStorage.setItem(this.clave, JSON.stringify(reservas));
  }
}
