
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {   id: 1,
            firstname: "Joe",
            lastname: "Luna",
            username:"joeluna17",
            password:"101882Jl"
        } 
      ]);
    });
};


