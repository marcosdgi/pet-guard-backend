import { DateTime } from 'luxon'
import { BaseModel,column } from '@adonisjs/lucid/orm'

export default class TipoRaza extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column()
  declare nombre: string;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


}