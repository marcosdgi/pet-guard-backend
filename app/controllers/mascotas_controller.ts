import Mascota from '#models/mascota'
import type { HttpContext } from '@adonisjs/core/http'
import { IMascota } from '../interfaces/mascota.js'

export default class MascotasController {
    async index({ response }: HttpContext) {
        const mascotas: Mascota[] | [] = await Mascota.query()
            .preload('raza')
        if (mascotas.length) {
            return response.status(200).send(mascotas)
        } else {
            return response.status(404).send({
                "message": "No se encontró ninguna mascota"
            })
        }
    }

    async crearMascota({ request, response }: HttpContext) {
        const mascotaData = <IMascota>request.body()
        if (mascotaData) {
            const mascota: Mascota = await Mascota.create(mascotaData)
            if (mascota) {
                return response.status(200).send(mascota)
            } else {
                return response.status(400).send({
                    "Message": "No se envio correctamente la solicitud"
                })
            }
        } else {
            return response.status(400).send({
                "Message": "No se enviaron datos"
            })
        }
    }

    async actualizarInfoMascota({ request, params, response }: HttpContext) {
        const mascotaId: number = params.mascotaId
        const mascota: Mascota | null = await Mascota.find(mascotaId)
        if (mascota) {
            const dataMascota = <IMascota>request.body()
            mascota.merge(dataMascota)
            await mascota.save()
            return response.status(200).send(mascota)
        } else {
            return response.status(404).send({
                'message': "Mascota no encontrada"
            })
        }
    }
    async eliminarMascota({ params, response }: HttpContext) {
        const mascotaId: number = params.mascotaId
        const mascota: Mascota | null = await Mascota.find(mascotaId)
        if (mascota) {
            await mascota.delete()
            return response.status(200)
        } else {
            return response.status(404).send({
                'Message': "Mascota no encontrada"
            })
        }
    }
}