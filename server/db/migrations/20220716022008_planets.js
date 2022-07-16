exports.up = function (knex) {
  return knex.schema.createTable('planets', (table) => {
    table.increment('id')
    table.string('name')
    table.integer('order')
    table.string('dateDiscovered')
    table.string('dayLength')
    table.string('yearLength')
    table.string('planetType')
    table.string('atmosphere')
    table.string('climate')
    table.string('moons')
    table.string('exploration')
    table.string('coolFact')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('planets')
}
