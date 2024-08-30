import { DateTime } from "luxon";

export interface IUsuario {
    id: number;
    nombre: string;
    segundoNombre: string | null;
    apellidoPaterno: string;
    apellidoMaterno: string;
    contrasena: string;
    contrasena2: string;
    correo: string;
    mascota_id: number | null;
    rol_id: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

// Request post de prueba
// {
//     "nombre": "Marcos",
//         "segundoNombre": "Daniel",
//             "correo": "marcosdguilarte74@gmail.com",
//                 "contrasena": "Rubio7408*",
//                     "contrasena2": "Rubio7408*",
//                         "rol_id": 1

// }