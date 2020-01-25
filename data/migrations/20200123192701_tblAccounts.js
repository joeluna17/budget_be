
exports.up = function(knex) {
    return knex.schema.createTable("accounts", tbl => {
            tbl.increments();
            tbl.text("name")
                 .notNullable();
            tbl.text("type")
                 .notNullable();
            tbl.decimal("value", 8, 2)
                 .notNullable();
            tbl.integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("accounts");
};
