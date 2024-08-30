import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.string('correo').notNullable()
      table.string('contrasena').notNullable()
      table.string('segundo_nombre')
      table.string('apellido_paterno').notNullable()
      table.string('apellido_materno').notNullable()
      table.integer('rol_id').notNullable().defaultTo(2).references('id').inTable('roles').onDelete('CASCADE')
      table.integer('mascota_id').references('id').inTable('mascotas').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}