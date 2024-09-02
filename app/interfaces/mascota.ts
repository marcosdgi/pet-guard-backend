export interface IMascota {
    id: number;
    nombre: string;
    imagenMascota: string;
    usuario_id: number;
    edad: number;
    peso: number;
    fecha_ingreso: string;
    is_enfermo: boolean;
    is_adoptado: boolean;
    tipo_raza_id: number;
}
// {
//     "nombre":"Mishi",
//     "edad":2,
//     "peso":5,
//     "imagen_mascota":null,
//     "usuario_id":4,
//     "fecha_ingreso":"02-05-2021",
//     "is_enfermo":false,
//     "is_adoptado":true,
//     "tipo_raza_id":1
//  }