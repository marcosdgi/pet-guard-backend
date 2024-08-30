import type { HttpContext } from '@adonisjs/core/http'
import Role from "#models/role"
export default class RolesController {

    async obtenerRoles({ response }: HttpContext) {
        const roles: Role[] = await Role
            .all()
        if (roles.length) {
            return response.status(200).send(roles)
        } else {
            return response.status(200).send([{ "message": "No existen roles disponibles" }])

        }
    }

    async crearRol({ request, response }: HttpContext) {
        const rolName: string = request.input('nombre')
        const rol: Role = await Role.create({
            nombre: rolName
        })
        await rol.save()
        if (rol) {
            return response.status(200).json(rol)
        } else {
            return response.status(400)
        }
    }

    async eliminarRol({ params, response }: HttpContext) {
        const rolId: number = params.rolId
        const rol: Role | null = await Role.find(rolId)
        if (rol) {
            await rol.delete()
            return response.status(204)
        } else {
            return response.status(400)
        }
    }

    async obtenerRol({ params, response }: HttpContext) {
        const rolId: number = params.rolId
        const rol: Role | null = await Role.find(rolId);
        if (rol) {
            return response.status(200).send(rol)
        } else {
            return response.status(404)
        }
    }

    async actualizarRol({ params, response, request }: HttpContext) {
        const rolId: number = params.rolId
        const rol: Role | null = await Role.find(rolId)
        if (rol) {
            const rolName: string = request.input('nombre')
            rol.nombre = rolName
            await rol.save()
            return response.status(200).send(rol)
        } else {
            return response.status(404)
        }
    }

}