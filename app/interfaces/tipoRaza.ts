import { DateTime } from "luxon"

export interface ITipoRaza {
    id: number;
    nombre: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}