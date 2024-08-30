import vine from '@vinejs/vine'

export const LoginValidator = vine.compile(
    vine.object({
        correo: vine.string().trim(),
        contrasena: vine.string().trim()
    })
)