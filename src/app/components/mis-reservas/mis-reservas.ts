import { Component, inject, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ReservaService } from '../../core/services/reserva-service';
import { Reserva } from '../../core/model/reserva.model';

@Component({
  selector: 'app-mis-reservas',
  imports: [CurrencyPipe],
  templateUrl: './mis-reservas.html',
  styleUrl: './mis-reservas.css',
})
export class MisReservas implements OnInit {
  private readonly reservaService = inject(ReservaService);

  reservas = signal<Reserva[]>([]);

  ngOnInit(): void {
    this.reservas.set(this.reservaService.obtenerReservas());
  }
}
