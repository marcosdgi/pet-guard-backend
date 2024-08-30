import Usuario from '#models/usuario'
import { LoginValidator } from '#validators/usuario'
import type { HttpContext } from '@adonisjs/core/http'
import { IUsuario } from '../interfaces/usuario.js'
export default class UsuariosController {

    async obtenerUsuarios({ params, response }: HttpContext) {
        const rolId: number = params.rolId
        const usuarios: Usuario[] = await Usuario.query()
            .where('rol_id', rolId)
            .preload('rol')
           

        if (usuarios.length) {
            return response.status(200).json(usuarios)
        } else {
            return response.status(404).send({
                "message": "No hay usuarios con ese rol en el sistema"
            })
        }
    }

    async login({ request, response }: HttpContext) {
        const userInfo = await LoginValidator.validate(request.all())
        const usuario = await Usuario.verifyCredentials(userInfo.correo, userInfo.contrasena)
        return response.status(200).send(usuario)
    }

    async crearUsuario({ request, response }: HttpContext) {
        let data = <IUsuario>request.body()
        data.correo = data.correo.toLocaleLowerCase()

        if (data.contrasena === data.contrasena2) {
            try {
                const usuario: Usuario = await Usuario.create(<Usuario>{
                    nombre: data.nombre,
                    segundoNombre: data.segundoNombre ?? null,
                    apellidoPaterno: data.apellidoPaterno,
                    apellidoMaterno: data.apellidoMaterno,
                    mascota_id: data.mascota_id ?? null,
                    rol_id: data.rol_id,
                    correo: data.correo,
                    contrasena: data.contrasena2,
                })
                if (usuario) {
                    return response.status(200).send(usuario)
                } else {
                    return response.status(400)
                }
            } catch (error) {
                return response.status(400).send(error.message)
            }


        } else {
            return response.status(400).send({
                "Message": "Las contraseñas no coinciden"
            })
        }

    }

    async actualizarUsuario({ request, params, response }: HttpContext) {
        const usuarioId: number = params.usuarioId
        const usuario: Usuario | null = await Usuario.find(usuarioId)
        if (usuario) {
            const userData = <IUsuario>request.all()
            if (userData.contrasena) {
                await usuario.merge(userData)
                return response.status(200).send(usuario)
            } else {
                return response.status(400)
            }
        } else {
            return response.status(404).send({
                "message": "Usuario no encontrado"
            })
        }
    }

}