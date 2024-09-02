import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mascotas'

  async up() {
    const exists = await this.schema.hasTable(this.tableName)
    if (!exists) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.string('nombre')
        table.boolean('is_adoptado').notNullable().defaultTo(false)
      })
    } else {
      this.schema.table(this.tableName, (table) => {
        table.boolean('is_adoptado').notNullable().defaultTo(false)
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