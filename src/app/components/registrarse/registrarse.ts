import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  selector: 'app-registrarse',
  imports: [CustomInput, Button],
  templateUrl: './registrarse.html',
  styleUrl: './registrarse.css',
})
export class Registrarse {
  nombre = '';
  correo = '';
  contrasena = '';

  registrarse(): void {
    console.log('Registro simulado (sin backend):', this.nombre, this.correo);
  }
}
