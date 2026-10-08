export interface Cotizacion {

    fechaLlegada: string;
    fechaSalida: string;
    huespedes: number;
    noches: number;
    subtotal: number;       // noches × precio por noche
    tarifaLimpieza: number; // valor fijo del alojamiento
    tarifaServicio: number; // 10 % del subtotal
    total: number;

}
