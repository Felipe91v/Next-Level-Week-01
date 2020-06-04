import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
        
    });
}
//metodo up utilizado para adicionar tabelas

export async function down(knex: Knex) {
   return knex.schema.dropTable('items');
}
//metodo down utilizado para excluir tabelas