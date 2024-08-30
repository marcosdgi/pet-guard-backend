export interface IMascota {
    id: number;
    nombre: string;
    imagenMascota: string;
    usuario_id: string;
    edad: number;
    peso: number;
    fecha_ingreso: string;
    is_enfermo: boolean;
    is_adoptado: boolean;
    tipo_raza_id: number;
}