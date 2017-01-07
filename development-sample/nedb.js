var Datastore = require('nedb')

var db = new Datastore({
  filename: './sample-nedb-db',
  autoload: true
})

const movie = {
  _id: 'tt1345836',
  title: 'Dark Knight Rises',
  year: 2012,
}

// remove the old document
/*
db.remove(
  { _id: 'tt1345836' },
  { multi: true },
  (err, numRemoved) => {

  }
)

db.insert(movie, (err, newDoc) => {
  console.log(newDoc._id)
})
*/

db.find({}, (err, docs) => {
  console.log(docs)
})