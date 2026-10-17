import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  selector: 'app-contacto',
  imports: [CustomInput, Button],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';

  enviar(): void {
    console.log('Contacto (sin backend):', {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
    });
  }
}
