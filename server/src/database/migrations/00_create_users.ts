// tabela users
import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('whatsapp').notNullable();
    table.string('avatar').notNullable();
    table.string('cpf', 11).notNullable();
    table.string('rg', 12).notNullable();
    table.string('number_register', 14).notNullable();
    table.string('finish_course', 4).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
