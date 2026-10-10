import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { MarketplaceData } from '../model/marketplace-data.model';
import { Alojamiento } from '../model/alojamiento.model';
import { Resena } from '../model/resena.model';

@Injectable({
  providedIn: 'root',
})
export class AlojamientoService {

  private readonly http = inject(HttpClient);
  private readonly urlDatos = 'data/marketplace-data.json';

  /** Lee el archivo JSON de datos del marketplace */
  private obtenerDatos(): Observable<MarketplaceData> {
    return this.http.get<MarketplaceData>(this.urlDatos);
  }

  /** Obtiene solo los alojamientos activos */
  obtenerAlojamientos(): Observable<Alojamiento[]> {
    return this.obtenerDatos().pipe(
      map(datos => datos.alojamientos.filter(alojamiento => alojamiento.activo))
    );
  }

  /** Obtiene alojamientos destacados */
  obtenerAlojamientosDestacados(cantidad: number): Observable<Alojamiento[]> {
    return this.obtenerAlojamientos().pipe(
      map(alojamientos => [...alojamientos].sort((a, b) => b.calificacion - a.calificacion).slice(0, cantidad))
    );
  }

  /** Obtiene un alojamiento por su ID */
  obtenerAlojamientoPorId(id: number): Observable<Alojamiento | undefined> {
    return this.obtenerAlojamientos().pipe(
      map(alojamientos => alojamientos.find(alojamiento => alojamiento.id === id))
    );
  }

  /** Obtiene reseñas de un alojamiento por su ID */
  obtenerResenas(alojamientoId: number): Observable<Resena[]> {
    return this.obtenerDatos().pipe(
      map(datos => datos.resenas.filter(resena => resena.alojamientoId === alojamientoId))
    );
  }

}
