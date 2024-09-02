import Usuario from '#models/usuario'
import { LoginValidator } from '#validators/usuario'
import type { HttpContext } from '@adonisjs/core/http'
import { IUsuario } from '../interfaces/usuario.js'
// import Mascota from '#models/mascota'
export default class UsuariosController {

    async obtenerUsuariosPorRol({ params, response }: HttpContext) {
        const rolId: number = params.rolId
        const usuarios: Usuario[] = await Usuario.query()
            .where('rol_id', rolId)
            .preload('rol')
            .preload('mascotas', m => {
                m.preload('raza')
            })


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

    async obtenerUsuarios({ response }: HttpContext) {
        const usuarios: Usuario[] = await Usuario.all()
        if (usuarios) {
            return response.status(200).send(usuarios)
        } else {
            return response.status(200).send([])
        }
    }

    async obtenerUsuarioById({ params, response }: HttpContext) {
        const usuarioId: number = params.usuarioId
        if (usuarioId) {
            const usuario: Usuario[] = await Usuario.query()
                .where('id', usuarioId)
                .preload('mascotas')
                .preload('rol')
            if (usuario) {
                return response.status(200).send(usuario)
            } else {
                return response.status(404).send({
                    "message": "No se encontro un usuario con ese id"
                })
            }
        } else {
            return response.status(400).send({
                "Message": "No se envio un identificador para el usuario"
            })
        }
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
    async eliminarUsuario({ params, response }: HttpContext) {
        const usuarioId: number = params.usuarioId
        const usuario: Usuario | null = await Usuario.find(usuarioId)
        if (usuario) {
            await usuario.delete()
            return response.status(200)
        } else {
            return response.status(404).send({
                "Message": "Usuario no encontrado"
            })
        }
    }
}