import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Mascota from './mascota.js'
import Role from './role.js'
import { compose } from '@adonisjs/core/helpers'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('bcrypt'), {
  uids: ['correo'],
  passwordColumnName: 'contrasena',
})

class Usuario extends compose(BaseModel, AuthFinder) {
  static table = 'usuarios'
  @column({ isPrimary: true })
  declare id: number
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column()
  declare apellidoPaterno: string
  @column()
  declare apellidoMaterno: string
  @column()
  declare nombre: string
  @column()
  declare correo: string
  @column()
  declare contrasena: string
  @column()
  declare segundoNombre: string | null
  @column()
  declare rol_id: number
  @column()
  declare mascota_id: number | null
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  //- relationship mascotas "Un usuario puede tener varias mascotas"
  @hasMany(() => Mascota, {
    "localKey": "mascota_id",
    "foreignKey": "id"
  })
  declare mascotas: HasMany<typeof Mascota>
  //- Relationship rol "Cada usuario tiene un rol"
  @hasOne(() => Role, {
    "localKey": "rol_id",
    "foreignKey": "id"
  })
  declare rol: HasOne<typeof Role>

}

export default Usuario;