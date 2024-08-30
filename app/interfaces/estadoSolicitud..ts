import { DateTime } from "luxon";

export interface IEstadoSolicitud{
    id:number;
    nombre:string;
    createdAt:DateTime;
    updatedAt:DateTime;
}