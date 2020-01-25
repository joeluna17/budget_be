pg = require('pg')
pg.types.setTypeParser(1700, 'text', parseInt) // these two pieces of code are needed to make sure that pg parses the decimal values as numbers and not strings
const environment = process.env.ENVIRONMENT || "development";
const config = require('../knexfile')[environment];
const knex = require('knex');


module.exports = knex(config);