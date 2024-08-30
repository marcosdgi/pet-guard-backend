import { DateTime } from "luxon";

export interface IRol {
    id: number;
    nombre: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}