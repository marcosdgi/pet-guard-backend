import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export default class EstadoSolicitud extends BaseModel {
  static table = 'estado_solicitudes'
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare nombre: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  
}