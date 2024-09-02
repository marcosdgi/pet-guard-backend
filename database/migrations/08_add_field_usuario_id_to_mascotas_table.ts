import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mascotas'

  async up() {
    const exists = await this.schema.hasTable(this.tableName)
    if (!exists) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.string('nombre').notNullable()
        table.integer('peso')
        table.integer('edad')
        table.boolean('is_enfermo').notNullable()
        table.boolean('is_adoptado').notNullable().defaultTo(false)
        table.date('fecha_ingreso')
        table.string('imagen_mascota')
        table.integer('tipo_raza_id').notNullable().references('id').inTable('tipo_razas').onDelete('CASCADE')
        table.timestamp('created_at')
        table.timestamp('updated_at')
      })
    } else {
      this.schema.table(this.tableName, (table) => {
        table.integer('usuario_id').references('id').inTable('usuarios')
      })
    }
  }

  async down() {
    const exists = await this.schema.hasTable(this.tableName)
    if (exists) {
      this.schema.dropTable(this.tableName)
    }
  }
}