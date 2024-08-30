import Mascota from '#models/mascota'
import type { HttpContext } from '@adonisjs/core/http'

export default class MascotasController {
    async index({ response }: HttpContext) {
        const mascotas: Mascota[] | [] = await Mascota.all()
        
        if (mascotas.length) {
            return response.status(200).send(mascotas)
        } else {
            return response.status(404).send({
                "message": "No se encontró ninguna mascota"
            })
        }
    }

    async crearMascota({ request, response }: HttpContext) {
        const mascotaData: {} | null = request.body
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

}