import {Knex} from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('user_course', (table) => {
      table.integer('user_id').unsigned().notNullable();
      table.integer('course_id').unsigned().notNullable();
  
      table.foreign('user_id').references('users.id');
      table.foreign('course_id').references('courses.id');

          });

          
  }

export async function down(knex:Knex){
return knex.schema.dropTable('user_course')
}
