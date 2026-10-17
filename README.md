# Estadia LR - Marketplace de Alojamientos

Aplicación web en Angular para consultar alojamientos temporales, filtrarlos, cotizar una estancia y registrar una reserva de forma simulada (solo frontend).

## Integrantes

- Completar con los nombres del equipo

## Tecnologías

- Angular
- TypeScript
- HTML / CSS
- RxJS

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

Luego abrir `http://localhost:4200` en el navegador.

## Funcionalidades principales

- Página inicial con destacados
- Listado de alojamientos desde JSON (vía servicio)
- Filtros por ciudad, huéspedes, tipo y precio máximo
- Detalle de alojamiento con reseñas
- Cotización (noches, limpieza y servicio 10%)
- Reserva simulada guardada en localStorage
- Consulta de reservas en Mis reservas

## Estructura general

```
src/app/
  components/   # vistas y componentes UI
  core/
    model/      # interfaces
    services/   # acceso a datos y reservas
public/
  data/         # marketplace-data.json
  imagenes/     # imágenes de alojamientos
```
