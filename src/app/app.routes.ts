import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Alojamientos } from './components/alojamientos/alojamientos';
import { AlojamientoDetalle } from './components/alojamiento-detalle/alojamiento-detalle';
import { Contacto } from './components/contacto/contacto';
import { IniciarSesion } from './components/iniciar-sesion/iniciar-sesion';
import { Registrarse } from './components/registrarse/registrarse';
import { MisReservas } from './components/mis-reservas/mis-reservas';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'alojamientos', component: Alojamientos },
  { path: 'alojamientos/:id', component: AlojamientoDetalle },
  { path: 'mis-reservas', component: MisReservas },
  { path: 'contacto', component: Contacto },
  { path: 'iniciar-sesion', component: IniciarSesion },
  { path: 'registrarse', component: Registrarse },
  { path: '**', redirectTo: '' },
];
