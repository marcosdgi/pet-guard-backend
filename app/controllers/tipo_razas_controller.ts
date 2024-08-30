import type { HttpContext } from '@adonisjs/core/http'
import TipoRaza from '#models/tipo_raza'
export default class TipoRazasController {

    // obtener todos los tipos de razas 
    async index({ response }: HttpContext) {
        const tipoRazas: TipoRaza[] = await TipoRaza.all()
        if (tipoRazas) {
            return response.status(200).send(tipoRazas)
        } else {
            return response.status(200).send([])
        }
    }
    //  obtener una raza en especifico
    async obtenerRaza({ response, params }: HttpContext) {
        const razaId: number = params.razaId
        const raza: TipoRaza | null = await TipoRaza.find(razaId)
        if (raza) {
            return response.status(200).send(raza)
        } else {
            return response.status(404).send({
                "message": "No existe una raza con ese identificador"
            })
        }
    }
    // Crear un tipo de raza
    async crearTipoRaza({ response, request }: HttpContext) {
        const tipoRazaNombre: string = request.input('nombre')
        const tipoRaza: TipoRaza = await TipoRaza.create({
            nombre: tipoRazaNombre
        })
        if (tipoRaza) {
            return response.status(201).send(tipoRaza)
        } else {
            return response.status(400)
        }
    }
    // Actualizar una raza
    async actualizarRaza({ request, response, params }: HttpContext) {
        const razaId: number = params.razaId
        const raza: TipoRaza | null = await TipoRaza.find(razaId)
        if (raza) {
            raza.nombre = request.input('nombre')
            raza.save()
            return response.status(200).send(raza)
        } else {
            return response.status(404).send({
                "message": "Raza no encontrada"
            })
        }
    }

    async eliminarRaza ({params, response}:HttpContext){
        const razaId : number = params.razaId
        const raza : TipoRaza | null = await TipoRaza.find(razaId)
        if(raza){
            raza.delete()
            return response.status(204)
        }else{
            return response.status(404).send({
                "message": "Raza no encontrada"
            })
        }
    }
}