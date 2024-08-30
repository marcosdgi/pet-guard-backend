import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import TipoRaza from './tipo_raza.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
export default class Mascota extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  @column()
  declare nombre: string
  @column()
  declare peso: number
  @column()
  declare edad: number
  @column()
  declare is_enfermo: boolean
  @column()
  declare fecha_ingreso: string
  @column()
  declare image_mascota: string | null
  @column()
  declare usuario_id: number | null
  @column()
  declare tipo_raza_id: number


  @hasOne(() => TipoRaza, {
    foreignKey: 'id',
    localKey: 'tipo_raza_id'
  })
  declare raza: HasOne<typeof TipoRaza>

}