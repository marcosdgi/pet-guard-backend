import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'solicitudes_adopciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('mascota_id').references('id').inTable('mascotas').onDelete('CASCADE')
      table.integer('estado_solicitud_id').references('id').inTable('estado_solicitudes').onDelete('CASCADE')
      table.integer('rol_solicitante_id').references('id').inTable('roles').onDelete('CASCADE')
      table.integer('usuario_id').references('id').inTable('usuarios').onDelete('CASCADE')
      table.string('condiciones_vida')
      table.string('correo')
      table.string('nombre_completo')
      table.string('no_telefono')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}