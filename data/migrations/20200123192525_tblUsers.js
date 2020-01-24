
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.text('firstname')
        .notNullable();
        tbl.text("lastname")
        .notNullable();
        tbl.text("username")
        .notNullable()
        .unique();
        tbl.text("password")
        .notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
