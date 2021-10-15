const db = require('../../data/dbConfig');

function find() {
return db('users')
    .select('id','username')
}

function findBy(filter) {
  return db('users')
    .select('id','username')
    .where(filter)
}

function findById(id) {
    return db('users')
      .select('id','username')
      .where('id', id).first()
    
}

function add(user) { 
  return db('users').insert(user)
  .then(([id]) => {
    return db('users').where('id', id).first()
  })
}
module.exports = {
  add,
  find,
  findBy,
  findById,
};
