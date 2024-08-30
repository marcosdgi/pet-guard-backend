import EstadoSolicitud from '#models/estado_solicitud'
import type { HttpContext } from '@adonisjs/core/http'
import { IEstadoSolicitud } from '../interfaces/estadoSolicitud..js'

export default class EstadoSolicitudsController {
    async index({ response }: HttpContext) {
        const estadosSolicitudes: EstadoSolicitud[] = await EstadoSolicitud.all()
        if (estadosSolicitudes) {
            return response.status(200).send(estadosSolicitudes)
        } else {
            return response.status(404).send({
                "message": "No se encontraron estados de solicitudes"
            })
        }
    }

    async crearEstadoSolicitud({ request, response }: HttpContext) {
        const nombre: string = request.input('nombre')
        if (nombre) {
            const estadoSolicitud: IEstadoSolicitud = await EstadoSolicitud.create({ nombre })
            if (estadoSolicitud) {
                return response.status(200).send(estadoSolicitud)
            } else {
                return response.status(400).send({
                    "Message": "Ocurrio un error al crear el estado de solicitud"
                })
            }
        }
    }

    async eliminarEstadoSolicitud({ params, response }: HttpContext) {
        const estadoSolicitudId: number = params.estadoSolicitudId
        if (estadoSolicitudId) {
            const estadoSolicitud: EstadoSolicitud | null = await EstadoSolicitud.find(estadoSolicitudId)
            if (estadoSolicitud) {
                await estadoSolicitud.delete()
                return response.status(200).send({ "message": "Estado eliminado correctamente" })
            }
        } else {
            return response.status(400)
        }
    }
}