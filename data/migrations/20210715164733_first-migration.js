export async function up(knex) {
  await knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 250).notNullable().unique()
      table.string('zoo_address', 500).notNullable()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 300).notNullable().unique()
    })
    .createTable('animals', table => {
      table.increments('animals_id')
      table.string('animal_name', 100).notNullable()
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
    })
}

export async function down(knex) {
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
}
