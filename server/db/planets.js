const connection = require('./connection')

//write db functions here

function getPlanets (db = connection) {
  return db('planet').select()
}

module.exports = {
  getPlanets
}
