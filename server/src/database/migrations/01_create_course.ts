import {Knex} from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('courses', (table) => {
      table.increments('id').primary();
    table.string('name_course').notNullable();
    table.string('shift').notNullable();
          });
  }

export async function down(knex:Knex){
return knex.schema.dropTable('courses')
}
