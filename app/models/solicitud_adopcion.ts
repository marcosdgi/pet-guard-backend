import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasOne } from '@adonisjs/lucid/orm'
import Mascota from './mascota.js'
import Usuario from './usuario.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import EstadoSolicitud from './estado_solicitud.js'
export default class SolicitudAdopcion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column()
  declare condiciones_vida: string
  @column()
  declare correo: string
  @column()
  declare nombre_completo: string
  @column()
  declare no_telefono: string
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  @column()
  declare estado_solicitud_id: number
  @column()
  declare rol_solicitante_id: number
  @column()
  declare mascota_id: number
  @column()
  declare usuario_id: number

  @belongsTo(() => Mascota, {
    'localKey': 'mascota_id',
    "foreignKey": "id"
  })
  declare mascota: BelongsTo<typeof Mascota>
  @belongsTo(() => Usuario, {
    "localKey": "usuario_id",
    "foreignKey": "id"
  })
  declare usuario: BelongsTo<typeof Usuario>

  @hasOne(() => EstadoSolicitud)
  declare estadoSolicitud: HasOne<typeof EstadoSolicitud>


}