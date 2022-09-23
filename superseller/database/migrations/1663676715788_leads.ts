import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'leads'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()
      table.string('email',50).unique().notNullable()
      table.string('telephone', 30).notNullable()
      table.boolean('is_signed').notNullable().defaultTo(false)
    table
      .integer('sellers_id')
      .unsigned()
      .references('sellers.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
