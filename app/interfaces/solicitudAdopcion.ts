export interface ISolicitudAdopcion {
    id: number;
    condiciones: string;
    correo: string;
    nombre_completo: string;
    no_telefono: string;
    estado_solicitud_id: number;
    rol_solicitante_id: number;
    mascota_id: number;
    usuario_id: number;

}