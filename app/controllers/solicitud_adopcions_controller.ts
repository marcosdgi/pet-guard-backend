import type { HttpContext } from '@adonisjs/core/http'

import SolicitudAdopcion from "#models/solicitud_adopcion"
import { ISolicitudAdopcion } from '../interfaces/solicitudAdopcion.js'

export default class SolicitudAdopcionsController {
    async obtenerSolicitudes({ params, response }: HttpContext) {
        const estadoSolicitudId: number = params.estadoSolicitudId
        const solicitudes: SolicitudAdopcion[] = await SolicitudAdopcion.query()
            .where('estado_solicitud', estadoSolicitudId)
            .preload('usuario')
            .preload('mascota')
            .preload('estadoSolicitud')
        if (solicitudes) {
            return response.status(200).send(solicitudes)
        }
    }

    async crearSolicitud({ request, response }: HttpContext) {
        const dataSolicitud = <ISolicitudAdopcion>request.body()
        const solicitud = await SolicitudAdopcion.create(dataSolicitud)
        if (solicitud) {
            return response.status(201).send(solicitud)
        } else {
            return response.status(400)
        }
    }
}