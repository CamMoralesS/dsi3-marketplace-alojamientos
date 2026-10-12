import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [CustomInput, Button],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {
  correo = '';
  contrasena = '';

  entrar(): void {
    console.log('Inicio de sesión simulado (sin backend):', this.correo);
  }
}
